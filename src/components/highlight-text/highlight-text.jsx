import React from 'react';

function HighlightText({children}) {
    return (
        <span className="text-slate-700 relative before:absolute before:w-[60%] before:h-px before:bottom-[3px] hover:before:w-[90%] before:transition-all hover:before:bg-slate-700 hover:text-slate-900 before:right-0 before:left-0 before:mx-auto before:mx-auto before:bg-slate-400 whitespace-nowrap">{children}</span>
    );
}

export default HighlightText;