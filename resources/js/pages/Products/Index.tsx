import products from '@/routes/products'
import React from 'react'

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface Props {
    products: Product[]
}

const Product = ({ products }: Props) => {
    return (
        <div className='p-6'>
            <h1 className='py-3 font-bold rounded-lg'>Daftar product</h1>
            <table className='w-full border'>
                <thead className='p-6 gap-2'>
                    <tr>
                        <th className='border border-gray-300 px-4 py-2 text-left'>Nama Produk</th>
                        <th className='border border-gray-300 px-4 py-2 text-left'>Deskripsi</th>
                        <th className='border border-gray-300 px-4 py-2 text-left'>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: Product) => (
                        <tr key={product.id}>
                            <td className='border border-gray-300 px-4 py-2'>{product.name}</td>
                            <td className='border border-gray-300 px-4 py-2'>{product.description}</td>
                            <td className='border border-gray-300 px-4 py-2'>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product
