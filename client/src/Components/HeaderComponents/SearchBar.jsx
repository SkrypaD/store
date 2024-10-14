import styles from './styles/searchbar.module.css'


function SearchBar(){
    return (
        <div className={styles.searchbar}>
            <input className={styles.input} placeholder="What are you looking for?"></input>
            <button className={styles.btn}>Search</button>
        </div>
    )
}


export default SearchBar
