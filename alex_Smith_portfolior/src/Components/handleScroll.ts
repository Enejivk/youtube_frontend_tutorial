import { useState, useRef } from 'react';

export const useScrollHandler = () => {
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [pastScroll, setPastScroll] = useState<number>(0);
    const teRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!isMouseDown) return;
        const container = teRef.current;
        if (container) {
            const x = e.pageX - container.offsetLeft;
            const walk = (startX - x) * 2;
            container.scrollLeft = pastScroll + walk;
        }
    };

    const handleMouseLeave = () => {
        setIsMouseDown(false);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMouseDown(true);
        const container = teRef.current;
        if (container) {
            setStartX(e.pageX - container.offsetLeft);
            setPastScroll(container.scrollLeft);
        }
    };

    return {
        teRef,
        handleMouseMove,
        handleMouseLeave,
        handleMouseUp,
        handleMouseDown,
    };
};
