import React, { Component } from 'react';
import classes from './QuizCreactor.css';
import Input from '../input/input';
import Select from '../../Select/Select';
import { createControl, validate } from '../../framework/fromframework';

  function createOptionControl(number) {
        return createControl({
            label: `Вариант ${number}`,
            errorMessage: 'Значение не может быть пустым',
            id: number
        },{required: true })
    }
    function createFormControls() {
        return {
            question: createControl({
                label: "Введите вопрос",
                errorMessage: 'Вопрос не может быть пустым'
            }, {required: true}),
            option1: createOptionControl(1),
            option2: createOptionControl(2),
            option3: createOptionControl(3),
            option4: createOptionControl(4)
        }
    }

 class QuizCreator extends Component {
    state = {
        quzi: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
    }
    sibmitHandler = event =>{
        event.preventDefault()
        console.log (this.state.quzi)
    }

  
    addQuestionHandler = () => {
        const quzi = this.state.quzi.concat()
        const index = quzi.length + 1

        const {question, option1, option2, option3, option4 } = this.state.formControls

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        }
        quzi.push(questionItem)

        this.setState({
            quzi,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls()
        })
    }
    createQuizHandler = (event) => {
        event.preventDefault()

        console.log(this.state.quzi)

    }
    changeHandler = (value, controlName) =>{
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control
        
        this.setState({
            formControls,
            isFormValid: validate()
        })
        
    }
    renderControls(){
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return(
                <Input 
                label={control.label}
                value={control.value}
                valid={control.valid}
                shouldValidate={!!control.validation}
                touched={control.touched}
                errorMessage={control.errorMessage}
                onChange={event => this.changeHandler(event.target.value, controlName)}
                
                
                />
            )
        })
    }
    selectChangeHandler = event =>{
        this.setState({
            rightAnswerId: +event.target.value
        })
      }
    render() {
        const select = <Select
        lable="Выберите правильный ответ"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
            {text: 1, value: 1},
            {text: 2, value: 2},
            {text: 3, value: 3},
            {text: 4, value: 4}
        ]}
        />
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit = {this.sibmitHandler}>
                        {this.renderControls()}
                        { select }
                    <button type = 'primary' onClick={this.addQuestionHandler} disabled={!this.state.isFormValid}> Добавить вопрос</button>
                    <button type='success' onClick={this.createQuizHandler} disabled={this.state.quzi.length === 0}>Создать тест</button>
                </form>
                </div>
                
            </div>
        );
    }
}

export default QuizCreator;
