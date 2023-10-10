import React from 'react';
import { Oval } from 'react-loader-spinner';

interface Props {

}

const Spinner: React.FC<Props> = ({ }) => {
    return (
        <Oval
            height={80}
            width={80}
            color="#fff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="rgba(0, 0, 0, 0.25)"
            strokeWidth={2}
            strokeWidthSecondary={2}

        />
    );
};

export default Spinner;