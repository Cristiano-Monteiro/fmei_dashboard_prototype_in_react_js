import styles from './InputFileBox.module.css';

import BackButton from '../../Layout/BackButton/BackButton';
import SubmitButton from '../../Layout/SubmitButton/SubmitButton';

import uploadFileIcon from '../../../assets/icons/upload_file_icon.svg';
import attachFileAddIcon from '../../../assets/icons/attach_file_add_icon.svg';

export default function InputFileBox({ backToHome }){
    function handleFileSubmit(){
        const inputFile = document.getElementById("fileInput");

        const file = inputFile.files[0];
        
        if(file != undefined){
            const formData = new FormData();
        
            formData.append('file', file);
        
            const optionsFetch = {
                method: 'POST',
                body: formData,
            };
        
            fetch('http://152.67.42.101:4009/entradaDeDados', optionsFetch)
                .then(resp => resp.json())
                .then(respJson => {
                    console.log(respJson);
                    window.alert('ARQUIVO ENVIADO COM SUCESSO!');
                })
                .catch(err => console.log(err));
        } else {
            window.alert('Arquivo vazio! Adicione a sua tabela no campo abaixo.');
        };
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
                    method="post" 
                    encType='multipart/form-data' 
                    id='fileForm'
                >
                    <input
                        type="file" 
                        name="dataTable" 
                        id="fileInput"
                        required
                    />
                    <SubmitButton handleFileSubmit={handleFileSubmit}/>
                </form>
            </div>
        </div>
    );
};