import styles from './styles/billinginput.module.css'

function BillingInput({label, id, required, values, setValues}) {
    function onChange(input){
        const changedInput = values.map((value, index) => {
            if(index == id){
                return input
            }
            return value
            }
        )
        setValues(changedInput)
    }
    return (
        <div className={styles.form_group}>
            <label  for={id}>{label} 
            {required ? <span className={styles.required}>*</span> : <></>}
            </label>
            <input 
            required={required}
            className={styles.input_field}
            id={id}
            type="text"
            value={values[id]}
            onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default BillingInput
