import classNames from 'classnames'
import { ProjectTypes } from './types'

// whenever wee need to change default className value we will use this
export const cx = classNames

// nav data
export const navData = ['About', /*'Experiences', */ 'Projects' /*, 'Services'*/, 'Contact']

// project data
export const projects: ProjectTypes[] = [
    {
        title: 'Masycode Cashier Application',
        description: 'Cashier POS, free cashier app built with nextjs and local storage as database.',
        tech: ['React JS', 'Tailwind CSS', 'Node JS', 'Vercel JS', 'JavaScript'],
        code: 'https://github.com/abdulhafizk/cashier-pos',
        live: 'https://cashier-pos.vercel.app/',
        thumbnail: 'casier-apps.png',
        featured: true,
        type: ['Web', 'React', 'Vercel'],
    },
    {
        title: 'Reltime Chat App Demo',
        description: 'Chat Application using PHP with MySQL & JavaScript.',
        tech: ['Javascript', 'PHP', 'Laravel', 'Mysql'],
        code: 'https://github.com/abdulhafizk/realtime-chat-app-demo',
        live: 'https://tank-war-2d.netlify.app' /** Harus Diganti */,
        thumbnail: 'realtime-chat.png',
        featured: true,
        type: ['Web', 'Application', 'Laravel', 'Database', 'other'],
    },
    {
        title: 'Circle Drop',
        description:
            "An online 2D web game creating using Matter.js javascript physics engine library. It's a simple game you just need to drop the circle with your mouse and match it with the same circle.",
        tech: ['Matter.js', 'javascript', 'Webpack'],
        code: 'https://github.com/abdulhafizk/realtime-chat-app-demo',
        live: 'https://circle-drop.netlify.app/',
        thumbnail: 'circle-drop.png',
        featured: false,
        // type: ['web', 'game'],
    },
]
