"use client";

import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiShoppingBag, HiUser, HiViewBoards } from 'react-icons/hi';
import NextAvatar from './NextAvatar';

const NextSidebar = () => {
    return (
        <Sidebar aria-label="Sidebar with logo branding example" className='bg-red-50'>
            <Sidebar.Logo className='flex items-center justify-center' href="#" img="https://camo.githubusercontent.com/3b900b4e92e96c14c9e00818d9bd3a97d8b9de9344be4f5455113ac3f85eced8/68747470733a2f2f696d616765732e636c65726b2e636f6d2f7374617469632f6c6f676f2d6c696768742d6d6f64652d343030783430302e706e67" imgAlt="clerk">
                Next - Clerk
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#">
                        <NextAvatar />
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Kanban
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox}>
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>)
}

export default NextSidebar