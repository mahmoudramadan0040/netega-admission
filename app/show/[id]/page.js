"use client"

import { useParams  } from 'next/navigation';
import ShowNatega from '@/app/main/showComponent';


function dispalyDetails() {
    const params = useParams();
    return ( 
        <ShowNatega id={params.id}></ShowNatega>
    );
}

export default dispalyDetails;