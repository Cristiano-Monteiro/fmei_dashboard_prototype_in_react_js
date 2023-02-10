import InputFileBox from '../InputFileBox/InputFileBox';
import CalendarBox from '../CalendarBox/CalendarBox';

export default function ModalBox({ idModal, backToHome }){
    if(idModal === 'Home'){
        return null
    } else if(idModal === 'InputFile'){
        return <InputFileBox backToHome={backToHome}/>
    } else if(idModal === 'Calendar'){
        return <CalendarBox backToHome={backToHome}/>
    };
};