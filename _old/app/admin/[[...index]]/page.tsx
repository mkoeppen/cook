"use client";

import { NextStudio } from 'next-sanity/studio';
import config from "@/sanity.config";

console.log('-##########', config)

const AdminPage = function () {
    return <NextStudio config={config} />
}
  
export default AdminPage;