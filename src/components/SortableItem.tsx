import { IProductResponse } from "../data/IProductResponse";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ProductCard from "./ProductCard";
import { faGripLines, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
    product: IProductResponse;
}

export default function SortableItem({ product }: IProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: product.Id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: '10px',
        margin: '5px 0',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center'
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes}>
            <ProductCard product={product} />

            {!product.IsActive && (
                <div {...listeners} style={{ cursor: 'grab', marginLeft: '10px' }}><FontAwesomeIcon icon={faGripVertical} /></div>
            )}
        </div>
    );
}