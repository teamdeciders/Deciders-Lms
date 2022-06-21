import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ backgroundColor: match ? "#FC8B06" : "#FDFCF6", display: 'flex', width: 'full', padding: '8px 0px', fontWeight: 'bold', borderRadius: '5px', color: match ? "white" : "black", textAlign: 'center', marginBottom: '10px', justifyContent: 'center', gap: '10px' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}


export default CustomLink;