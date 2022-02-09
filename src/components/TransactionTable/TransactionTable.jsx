import s from './TransactionTable.module.css'


export default function transactionTable() {
    return (
        <>
            <div >
                <table className={s.transactionTable}>
                    <tr>
                        <th className={s.title}>ДАТА</th>
                        <th>ОПИСАНИЕ</th>
                        <th>КАТЕГОРИЯ</th>
                        <th >СУММА</th>
                    </tr>
                </table>
                <div className={s.tebleCont}>
                    <table className={s.table}>
                       
                     
                    </table>
                </div>
            </div>
        </>
    )
}