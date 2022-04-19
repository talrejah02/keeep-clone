import React from 'react'
import { AntDesignBulbOutlined } from '../../icones/AntDesignBulbOutlined'
import { AntDesignBellOutlined } from '../../icones/AntDesignBellOutlined'


function Sidebar() {
    return (
<section className='sidebar'>   
    <section>
        <AntDesignBulbOutlined/>
        <span>Notes</span>
    </section>

    <section>
        <AntDesignBellOutlined/>
        <span>Reminders</span>
    </section>
    <section></section>
    <section></section>
    <section></section>
</section>
    )
}

export default Sidebar
