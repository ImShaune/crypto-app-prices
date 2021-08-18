import React from 'react'
import CoinRow from './CoinRow'


const titles = ['#', 'Coin', 'Price', 'Prices Change', '24h Volume'];

const TableCoins = ({ coins, search }) => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );;




    return (
        <table className='table table-dark mt-4 table-hover'>
        <thead>
            <tr>
                {titles.map((titles, index) => (
                <td key={index}>{titles}</td>
                ))}
            </tr>
        </thead>
    <tbody>
        {filteredCoins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index + 1} />
            ))}
    </tbody>
</table>)
}

export default TableCoins
        
