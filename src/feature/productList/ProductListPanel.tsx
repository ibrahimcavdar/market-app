import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
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
    useEffect(() => {
        fetch(
            `http://localhost:8080/items?itemType_like=${itemType}&_page=1&_limit=16&_sort=price&_order=asc&tags_like=Person&tags_like=Trees&manufacturer=Leannon-Fahey-and-Sawayn&manufacturer=OHara-Group`
        )
            .then((res) => res.json())
            .then((data) => {
                setProductList(data);
                console.log(data);
            });
    }, [itemType]);
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
