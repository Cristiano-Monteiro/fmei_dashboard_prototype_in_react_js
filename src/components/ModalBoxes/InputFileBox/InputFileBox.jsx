import styles from './InputFileBox.module.css';

import uploadFileIcon from '../../../assets/icons/upload_file_icon.svg';
import attachFileAddIcon from '../../../assets/icons/attach_file_add_icon.svg';
import doneIcon from '../../../assets/icons/done_outline_icon.svg';
import backIcon from '../../../assets/icons/arrow_back_icon.svg';

function InputFileBox(){
    return(
        <div className={styles.inputFileBoxContainer}>
            <div className={styles.inputFileBoxContent}>
                <figure className={styles.uploadFileIcon}>
                    <img src={uploadFileIcon} alt="Ícone de enviar arquivo" />
                </figure>
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
                    />
                    <button type="submit">
                        <img src={doneIcon} alt="Ícone de finalizar ou terminar uma ação" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputFileBox;