import styles from './InputFileBox.module.css';

import uploadFileIcon from '../../assets/icons/upload_file_icon.svg';
import attachFileAddIcon from '../../assets/icons/attach_file_add_icon.svg';

function InputFileBox(){
    return(
        <div className={styles.inputFileBoxContainer}>
            <div className={styles.inputFileBoxContent}>
                <figure className={styles.uploadFileIcon}>
                    <img src={uploadFileIcon} alt="Ícone de enviar arquivo" />
                </figure>
                <h2>Adicione sua Tabela</h2>
                <div className={styles.inputContainer}>
                    <figure className={styles.attachFileAddIcon}>
                        <img src={attachFileAddIcon} alt="Ícone de anexar arquivo" />
                    </figure>
                    <input type="file" name="dataTable" id="fileInput" />
                </div>
            </div>
        </div>
    );
};

export default InputFileBox;