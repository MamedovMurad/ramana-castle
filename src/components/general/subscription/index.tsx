import { ArrowIcon, LetterIcon } from '@/svg';
import React, { ReactNode } from 'react';

interface Props {
    className?: string,
    text: ReactNode
}

const Subscription: React.FC<Props> = ({ className = "w-full", text }) => {
    return (
        <div className={className + ' border-[1px] border-white border-solid flex items-center justify-between p-[20px]'}>
            <LetterIcon />
            {text}
            <ArrowIcon />
        </div>
    );
};

export default Subscription;