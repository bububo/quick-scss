import './form.css';
import React from 'react';
import Source from '../source/source.js';
import Result from '../result/result.js';

export default class Form extends React.Component {
   constructor(props) {
        super(props);
        this.state ={
            resultScss: 'Result SCSS here'
        }; 

        this.createScss = this.createScss.bind(this);  
   }

    createScss(sourceHtml) {
        const classesArr = this.getClassesArray(sourceHtml);
        const blocks = this.getBemStructure(classesArr);
        const blockNames = Object.keys(blocks);
        let str = '';
        blockNames.forEach((blockName) => {
            const elements = blocks[blockName];

            str += `.${blockName} { \n`
            str += `    $this: &; \n\n`
            
            elements.forEach((element) => {
                str += `    &__${element} { \n\n`;
                str += `    }\n\n`
            });

            str += `}\n\n`
        });

        this.setState(
            {resultScss: str}
        )
    }

    getClassesArray(sourceHtml) {
        const wrapper = document.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', sourceHtml);

        const nodes = wrapper.querySelectorAll('[class]');
        let classesArr = [];
        for (let i=0; i<nodes.length; i++) {
            classesArr = classesArr.concat([...nodes[i].classList]);
        }
    
        return classesArr;
    }

    getBemStructure(classesArr) {
        const blocks = {};
        classesArr.forEach((className) => {
            const matchResult = className.match(/(.*)__(.*)/);
            if (!matchResult) {
                return;
            }
            const block = matchResult[1];
            const element = matchResult[2];

            if (typeof blocks[block] === 'undefined') {
                blocks[block] = [];
            }

            if ((blocks[block].indexOf(element) === -1)) {
                blocks[block].push(element);
            }
        });

        return blocks;
    }

    render() {
        return (
            <div>
                <Source process={this.createScss} />
                <Result result={this.state.resultScss} test="asd" />
            </div>
        );
    }     
    
}
