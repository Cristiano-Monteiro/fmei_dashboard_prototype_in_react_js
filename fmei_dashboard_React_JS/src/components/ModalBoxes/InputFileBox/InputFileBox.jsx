import styles from './InputFileBox.module.css';

import BackButton from '../../Layout/BackButton/BackButton';
import SubmitButton from '../../Layout/SubmitButton/SubmitButton';

import uploadFileIcon from '../../../assets/icons/upload_file_icon.svg';
import attachFileAddIcon from '../../../assets/icons/attach_file_add_icon.svg';

export default function InputFileBox({ backToHome }){
    function handleFileForm(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

/*         fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json()).then(respJson => console.log(respJson)); */
    };

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
                <form 
                    action="" 
                    method="post" 
                    encType='multipart/form-data' 
                    id='fileForm'
                    onSubmit={handleFileForm}
                >
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