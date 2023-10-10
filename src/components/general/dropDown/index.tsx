// CustomDropdown.tsx
"use client"
import { ArrowBottomIcon } from '@/svg';
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter  } from 'next/navigation'
interface CustomDropdownProps {
    options: { label: string, id: number }[];
    onSelect: (selectedOptions: { label: string, id: number }[]) => void;
    def: string
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ def, options, onSelect }) => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<{ label: string, id: number }[]>([]);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionToggle = (option: { label: string, id: number }, force?: boolean) => {
           
        if (force) {
            setSelectedOptions([option]);
            onSelect([option]);
        }
        else if (selectedOptions.map(e => e.label).includes(option.label)) {
            router.replace("/products",{ scroll: false })
            setSelectedOptions(selectedOptions.filter((item) => item.label !== option.label));
            onSelect(selectedOptions.filter((item) => item.label !== option.label))

        } else {
            router.replace("/products",{ scroll: false })
            setSelectedOptions([...selectedOptions, option]);
            onSelect([...selectedOptions, option]);
        }
    };

    useEffect(() => {
        if (searchParams.get('gender') && options) {
            const findOPtion = options.find(item => item.id === Number(searchParams.get('gender')))
            findOPtion && handleOptionToggle(findOPtion, true)
        }
        /*  */
    }, [searchParams.get('gender')])

    const handleApplySelection = () => {
        onSelect(selectedOptions);
        setIsOpen(false);
    };

    return (
        <div className="custom-dropdown relative flex flex-col items-center cursor-pointer" ref={dropdownRef}>
            <div className="dropdown-header flex items-center gap-x-2" onClick={toggleDropdown}>
                {selectedOptions.length > 0
                    ? selectedOptions.map(item => item.label).join(', ')
                    : def} <ArrowBottomIcon />
            </div>
            {isOpen && (
                <ul className="dropdown-options absolute z-10 top-10 bg-drop  backdrop-blur-lg p-5
                 text-white text-[16px] font-normal flex flex-col gap-y-5">
                    {options.map((option) => (
                        <li key={option.id}>
                            <label>
                                <input
                                    className=' inline-block mr-1'
                                    type="checkbox"
                                    value={option.id}
                                    checked={selectedOptions.map(e => e.label).includes(option.label)}
                                    onChange={() => handleOptionToggle(option)}
                                />
                                {option.label}
                            </label>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default CustomDropdown;
