import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { ProductCard } from "../product/ProductCard";

type ItemType = "mug" | "shirt" | "";

export interface Product {
    tags: string[];
    price: number;
    name: string;
    description: string;
    slug: string;
    added: number;
    manufacturer: string;
    itemType: ItemType;
}

export const ProductListPanel = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    const itemType = useAppSelector((state) => state.filter);
    const { order, sortBy } = useAppSelector((state) => state.sorting);
    const brandList = useAppSelector((state) => state.brand);
    const tagList = useAppSelector((state) => state.tag);
    useEffect(() => {
        // Create query params
        let url = "http://localhost:8080/items?";
        // todo page
        const pageQuery = `_page=1&_limit=16`;
        const itemTypeQuery = `&itemType=${itemType}`;
        const sortQuery = `&_sort=${sortBy}&_order=${order}`;

        let tagQuery = '';
        let brandQuery = '';

        if (tagList[0] !== 'All') {
            tagQuery = tagList
                .filter((tag) => tag !== 'All')
                .map((tag) => `&tags_like=${tag}`)
                .join('');
        }

        if (brandList[0] !== 'All') {
            brandQuery = brandList
                .filter((brand) => brand !== 'All')
                .map((brand) => `&manufacturer=${brand}`)
                .join('');
        }

        fetch(
            url + pageQuery + itemTypeQuery + sortQuery + tagQuery + brandQuery
        )
            .then((res) => res.json())
            .then((data) => {
                setProductList(data);
                console.log(data);
            });
    }, [itemType, order, sortBy, brandList, tagList]);
    return (
        <Grid
            container
            padding={4}
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {productList.map((product, index) => (
                <Grid item xs={2} sm={4} md={3} key={index}>
                    <ProductCard product={product} key={product.slug} />
                </Grid>
            ))}
        </Grid>
    );
};
