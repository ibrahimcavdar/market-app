import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PAGE_LIMIT } from "../../globals";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setPageCount } from "../pagination/pageSlice";
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
    const selectedPage = useAppSelector((state) => state.page.selectedPage);

    const dispatch = useAppDispatch();

    useEffect(() => {
        // Create query params
        let url = "http://localhost:8080/items?";
        const pageQuery = `_page=${selectedPage+1}&_limit=${PAGE_LIMIT}`;
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
            .then((res) => {
                dispatch(setPageCount(Math.ceil(Number(res.headers.get('X-Total-Count'))/PAGE_LIMIT)));
                return res.json();
            })
            .then((data) => {
                setProductList(data);
                console.log(data);
            });
    }, [itemType, order, sortBy, brandList, tagList,dispatch,selectedPage]);
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
