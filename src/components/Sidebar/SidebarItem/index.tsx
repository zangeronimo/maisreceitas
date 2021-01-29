import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons';
import { Container, Subitems } from "./styles"

interface ISidebarItemProps {
    label: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({ label, icon: Icon, children }) => {
    const [showChild, setShowChild] = useState(false);
    
    return (
        <>
            <Container 
                onClick={() => setShowChild(!showChild)}
            >
                <div>
                    {Icon && <Icon />}
                    {label}
                </div>
                {showChild ? <FiChevronUp /> : <FiChevronDown />}
            </Container>

            <Subitems showSubitems={showChild}>{children}</Subitems>
        </>
    )
}

export default SidebarItem;