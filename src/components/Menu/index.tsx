'use client'
import Link from "next/link";
import { useState } from "react";

const nav = [
    {
        url: '/',
        title: 'Home',
        icon: ({ handleClick, id }: {
            handleClick: any
            id: string
        }) => <i id={id} onClick={handleClick} className="bi bi-house text-dark me-2"></i>,
        active: true
    },
    {
        url: '/aprender',
        title: 'Aprender',
        icon: ({ handleClick, id }: {
            handleClick: any
            id: string
        }) => <i id={id} onClick={handleClick} className="bi bi-book text-dark me-2"></i>,
        active: false
    },
    {
        url: '/agenda',
        title: 'Agenda',
        icon: ({ handleClick, id }: {
            handleClick: any
            id: string
        }) => <i id={id} onClick={handleClick} className="bi bi-calendar3 text-dark me-2"></i>,
        active: false
    },
    {
        url: '/debitos',
        title: 'Debitos',
        icon: ({ handleClick, id }: {
            handleClick: any
            id: strings
        }) => <i id={id} onClick={handleClick} className="bi bi-currency-dollar text-dark me-2"></i>,
        active: false
    },
]

export default function Menu() {
    const [btns, setBtns] = useState(nav)

    const handleClick = ({ target }) => {
        nav.map(item => item.active = false);
        setBtns(item => {
            const button = [...nav];
            button[target.id].active = true
            return button;
        });
    }
    return (
        <div className="p-2">
            <div style={{ width: "96%" }} className="mb-2 position-fixed bottom-0 bg-secondary-subtle border rounded-5">
                <div className="d-flex my-3 mx-4 justify-content-around text-dark">
                    {
                        btns.map((item, index) => (
                            <div key={`menu-${index}`}>
                                {
                                    item.active ?
                                        <Link href={item.url} className="box text-center nav-link  d-flex align-items-center border-1 rounded-4 bg-light px-4 py-1"
                                        >
                                            <h5 className="m-0"><item.icon id={`${index}`} handleClick={handleClick} /></h5>
                                            <small className="m-0">{item.title}</small>
                                        </Link>
                                        :
                                        <Link href={item.url} className="box text-center nav-link  d-flex align-items-center ">
                                            <h5 className="m-0"><item.icon id={`${index}`} handleClick={handleClick} /></h5>
                                            {/* <small className="m-0">Home</small> */}
                                        </Link>
                                }
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}