import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux';
import {
    addRequest,
    changeBrand,
    changeDescription,
    changeEmail,
    changeModel,
    changePhone,
    changeStation,
    changeFile,
    changeType,
    emailNotification,
    loadUserInfo,
    phoneNotification
} from "../../redux/user-action-creators";


const Wrapper = styled.div`
    padding: 100px 30px;
    background-color: #FCFCFE;
`;

const Title = styled.h3`
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 0;
`;

const Subtitle = styled.p`
    font-size: 16px;
    color: #000000;
`;

const Group = styled.h4`
    font-size: 20px;
    color #9D9D9D;
    margin-bottom: 0;
    margin-top: 30px;
`;

const FormWrapper = styled.form`
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-top: 20px;
    width: ${props => props.width ? props.width : 'auto'}
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent};
`;

const Button = styled.button`
    color: #fff;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    justify-content: center;
    padding: 0 25px;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 15px;
    font-weight: bold;
    height: 44px;
    align-self: center;
    background: #6A7BFF;
    box-shadow: 0px 4px 6px rgba(106, 123, 255, 0.1);
    border-radius: 10px;
    margin-top: 20px;
`;

const Input = styled.input`
    background-color: #fff;
    padding: 0px 13px 0px 20px;
    border: 1px solid #eee;
    box-sizing: border-box;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    box-shadow: 0px -2px 6px rgba(140, 140, 140, 0.1), 0px 2px 6px rgba(140, 140, 140, 0.1);
    border-radius: 10px;
    width: 330px;
    height: 50px;
    margin-top: 10px;
    
    @media (max-width: 768px) {
        margin-right:0;
        margin-bottom: 10px;
    }
`;

const Textarea = styled.textarea`
    background-color: #fff;
    padding: 13px 120px 13px 13px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #eee;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin: 10px 0;
    width: 40%;
    font-style: normal;
    font-family: Arial;
    box-shadow: 0px -4px 6px rgba(140, 140, 140, 0.1), 0px 4px 6px rgba(140, 140, 140, 0.1);
    resize: none;
    height: 177px;
    width: 100%;
`;

const FormLabel = styled.label`
    font-size: 14px;
`;

const CheckboxLabel = styled.label`
    font-size: 16px;
    display: inline-block;
    
    :after {
        content:'';
        display:block;
        height:14px;
        width:14px;
        outline:1px solid #6A7BFF;
        position:absolute;
        top:0;
        left:0;
        margin-top: 4px;
    }
`;

const CheckboxGroup = styled.div`
    margin: 10px 0px;
    color: #000000;
    position:relative;
    padding-left:25px;
`;

const Checkbox = styled.input`
    display:none;
   :checked + ${CheckboxLabel}:after {
        outline:1px solid #6A7BFF;
        border:2px solid #fff;
        width:10px;
        height:10px;
        background-color: #6A7BFF;
       
   }
`;

const Error = styled.span`
    background: #f66;
    color: #fff;
    padding: 5px 5px 5px 15px;
    text-align: left;
    margin-top: 10px;
    border-radius: 20px;
    font-size: 13px;
`;
const Image = styled.img`
    height: 200px;
    width: 206px;
`;

class NewRequest extends React.Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        const {
            email, station, phone, type, model, desc, brand,emailNotification,phoneNotification,file,isFileType,
            isStationCheck, isModelCheck, isTypeCheck, isEmailCheck, isPhoneCheck, isDescriptionCheck,mustCheckFields,isBrandCheck
        } = this.props;

        return (
            <Wrapper>
                <Title>Создание заявки на ремонт</Title>
                <Subtitle>Постарайтесь как можно подробней описать заявку : тип техники, марку, модель.
                    По возможности, прикрепите фото.<br/> Чем точнее Вы опишите заявку - тем точнее сервисные центры
                    смогут назвать цену,
                    и быстрее будет ремонт.</Subtitle>
                <FormWrapper>
                    <Group>Описание проблемы</Group>
                    <Container justifyContent={'flex-start'}>
                        <FormGroup>
                            <FormLabel htmlFor={'type'}>Тип техники</FormLabel>
                            <Input onChange={this.props.onChangeType} value={type} name={'type'}
                                   placeholder={'Ноутбук'}/>
                            {mustCheckFields && !isTypeCheck ? <Error>Проверьте правильность поля</Error> : null}
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor={'type'}>Марка техники</FormLabel>
                            <Input onChange={this.props.onChangeBrand} value={brand} name={'company'}
                                   placeholder={'Asus'}/>
                            {mustCheckFields && !isBrandCheck ? <Error>Проверьте правильность поля</Error> : null}
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor={'type'}>Модель техники</FormLabel>
                            <Input onChange={this.props.onChangeModel} value={model} name={'model'}
                                   placeholder={'Модель'}/>
                            {mustCheckFields && !isModelCheck ? <Error>Проверьте правильность поля</Error> : null}
                        </FormGroup>
                    </Container>
                    <Container justifyContent={'flex-start'}>
                        <FormGroup width={'40%'}>
                            <FormLabel htmlFor={'problem'}>Опишите проблему</FormLabel>
                            <Textarea onChange={this.props.onChangeDescription} value={desc} name='problem'
                                      resize='none'
                                      placeholder={'Например, не работает кнопка включения'}/>
                            {mustCheckFields && !isDescriptionCheck ? <Error>Проверьте правильность поля</Error> : null}
                        </FormGroup>
                        <FormGroup>
                            {file !== null && isFileType && <Image src={file}/>}
                            <input style={{'marginTop': '35px', 'marginLeft': '20px'}} type='file' onChange={this.props.onChangeFile}/>
                            {!isFileType ? <Error>Фото должно быть в формате .png, .jpeg или .jpg!</Error> : null}
                        </FormGroup>

                    </Container>
                    <Group>Общая информация</Group>
                    <Container justifyContent={'flex-start'}>
                        <FormGroup>
                            <FormLabel htmlFor={'phone'}>Телефон</FormLabel>
                            <Input onChange={this.props.onChangePhone} name='phone' placeholder={'Введите телефон'}
                                   value={phone}/>
                            {mustCheckFields && !isPhoneCheck ? <Error>Проверьте правильность поля</Error> : null}
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor={'email'}>Email</FormLabel>
                            <Input onChange={this.props.onChangeEmail} name='email' placeholder={'Введите email'}
                                   value={email}/>
                            {mustCheckFields && !isEmailCheck ? <Error>Проверьте правильность поля</Error> : null}
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor={'metro'}>Ближайшее метро</FormLabel>
                            <Input onChange={this.props.onChangeStation} name='metro' placeholder={'Введите метро'}
                                   value={station}/>
                            {mustCheckFields && !isStationCheck ? <Error>Проверьте правильность поля</Error> : null}
                        </FormGroup>
                    </Container>

                    <Container>
                        <FormGroup width={'30%'}>
                            <CheckboxGroup>
                                <Checkbox onClick={() => this.props.handleEmailNotification()} id='phone_email'
                                          type='checkbox'/>
                                <CheckboxLabel htmlFor={'phone_email'}>Уведомление по почте</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onClick={() => this.props.handlePhoneNotification()} id='phone_note'
                                          type='checkbox'/>
                                <CheckboxLabel htmlFor={'phone_note'}>Уведомление по телефону</CheckboxLabel>
                            </CheckboxGroup>
                        </FormGroup>

                        <FormGroup>
                            <Button
                                onClick={(e) => this.props.onRequestAdd(e, station, phone, email, type, brand, desc, model,
                                    isStationCheck, isModelCheck, isTypeCheck, isEmailCheck, isPhoneCheck, isDescriptionCheck,emailNotification,phoneNotification,file,isFileType)}>Отправить
                                заявку</Button>
                        </FormGroup>
                    </Container>
                </FormWrapper>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        station: state.request.station,
        phone: state.request.phone,
        email: state.request.email,
        type: state.request.type,
        brand: state.request.brand,
        desc: state.request.description,
        model: state.request.model,
        file: state.request.file,
        isDescriptionCheck: state.request.isDescriptionCheck,
        isModelCheck: state.request.isModelCheck,
        isTypeCheck: state.request.isTypeCheck,
        isEmailCheck: state.request.isEmailCheck,
        isPhoneCheck: state.request.isPhoneCheck,
        isStationCheck: state.request.isStationCheck,
        isBrandCheck: state.request.isBrandCheck,
        mustCheckFields: state.request.mustCheckFields,
        isRequestSuccess: state.request.isRequestSuccess,
        emailNotification: state.request.emailNotification,
        phoneNotification: state.request.phoneNotification,
        isFileType: state.request.isFileType

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(loadUserInfo()),
        onChangeType: (e) => dispatch(changeType(e)),
        onChangeModel: (e) => dispatch(changeModel(e)),
        onChangeBrand: (e) => dispatch(changeBrand(e)),
        onChangeDescription: (e) => dispatch(changeDescription(e)),
        onChangeEmail: (e) => dispatch(changeEmail(e)),
        onChangePhone: (e) => dispatch(changePhone(e)),
        onChangeFile: (e) => changeFile(e.target.files[0]),
        onChangeStation: (e) => dispatch(changeStation(e)),
        handleEmailNotification: () => dispatch(emailNotification()),
        handlePhoneNotification: () => dispatch(phoneNotification()),
        onRequestAdd: (e, station, phone, email, type, brand, desc, model,
                       isStationCheck, isModelCheck, isTypeCheck, isEmailCheck, isPhoneCheck, isDescriptionCheck,emailNotification,phoneNotification,file,isFileType) => dispatch(addRequest(e, station, phone, email, type, brand, desc, model,
            isStationCheck, isModelCheck, isTypeCheck, isEmailCheck, isPhoneCheck, isDescriptionCheck,emailNotification,phoneNotification,file,isFileType)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRequest)