import React from 'react'
import Search from '../../components/Search/Search'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
const CatalogPage = () => {
    return (
        <div className="flex flex-col">
            <section className="p-10 self-center">
                <Search />
            </section>
            <section>
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold">Search Results</h1>
                </div>
            </section>
            <section className="p-10">
                <ProductGrid />
            </section>
        </div>
    )
}

export default CatalogPage
