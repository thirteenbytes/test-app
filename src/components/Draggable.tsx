import React, { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Text } from "@chakra-ui/react"

interface DraggableProps {
    children: ReactNode;
}

export default function Draggable({ children }: DraggableProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <Text ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </Text>
    );
}
