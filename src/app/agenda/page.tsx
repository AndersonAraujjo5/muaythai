'use client'
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import FullCalendar from '@fullcalendar/react';
import './style.css';
const events = [
    { title: 'Meeting', start: new Date() }
]

export default function Agenda() {
    return (
        <>
            <div className="card p-4">
                <h6>Turmar das 19 as 20h</h6>
                <p className='m-0'>Instrutor: Jhons 10º Khan Sib</p>
                
            </div>
            <div className="callendar card p-4 my-4" >

                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView='dayGridMonth'
                    locale={'pt-br'}
                    dayNames={['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']}
                    monthNames={['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']}
                    events={[
                        { title: 'Presente', date: '2024-10-14' },
                        { title: 'Falta', date: '2024-10-11' }
                    ]}
                    titleFormat={{
                        month: 'long'
                    }}
                />
            </div>
        </>
    )
}

// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}