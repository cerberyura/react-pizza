import '../scss/components/_categories.scss';
import React from "react";


type CategoriesProps = {
    value: number;
    onChangeCategory: (index: number) => void;
}

const categories = [
    "Всі",
    "Мясні",
    "Вегетеріанська",
    "Гриль",
    "Гострі",
    "Закриті",
];
export const Categories: React.FC<CategoriesProps> = React.memo(({value, onChangeCategory}) => {

    return (
        <div className="Categories">
            <ul>
                {categories.map((categoryName, index) => (
                    <li key={index}
                        onClick={() => onChangeCategory(index)}
                        className={value === index ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    )
});

export default Categories;