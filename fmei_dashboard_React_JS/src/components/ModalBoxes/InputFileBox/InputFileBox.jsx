import styles from './InputFileBox.module.css';

import BackButton from '../../Layout/BackButton/BackButton';
import SubmitButton from '../../Layout/SubmitButton/SubmitButton';

import uploadFileIcon from '../../../assets/icons/upload_file_icon.svg';
import attachFileAddIcon from '../../../assets/icons/attach_file_add_icon.svg';

function InputFileBox({ backToHome }){
    return(
        <div className={styles.inputFileBoxContainer}>
            <div className={styles.inputFileBoxContent}>
                <figure className={styles.uploadFileIcon}>
                    <img src={uploadFileIcon} alt="Ícone de enviar arquivo" />
                </figure>
                <BackButton backToHome={backToHome}/>
                <div className={styles.text}>
                    <h2>Adicione sua Tabela</h2>
                    <figure className={styles.attachFileAddIcon}>
                        <img src={attachFileAddIcon} alt="Ícone de anexar arquivo" />
                    </figure>
                </div>
                <form action="#" method="post" encType='multipart/form-data'>
                    <input 
                        type="file" 
                        name="dataTable" 
                        id="fileInput"
                        required
                    />
                    <SubmitButton/>
                </form>
            </div>
        </div>
    );
};

export default InputFileBox;