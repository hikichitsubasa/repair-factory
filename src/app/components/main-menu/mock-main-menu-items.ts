import {MainMenuItem} from './main-menu-item';

export const MAINMENUITEMS: MainMenuItem[] = [
    {
        title: 'Main',
        icon: '',
        active: true,
        groupTitle: true,
        sub: '',
        routing: '',
        externalLink: '',
        budge: '',
        budgeColor: ''
    },
    {
        title: 'ホーム',
        icon: 'fa fa-home',
        active: false,
        groupTitle: false,
        sub: [
            {
                title: 'Admin',
                routing: '/admin/dashboard'
            },
            {
                title: 'Staff',
                routing: '/dashboard'
            }
        ],
        routing: '',
        externalLink: '',
        budge: '',
        budgeColor: ''
    },
    {
        title: 'オーダー一覧',
        icon: 'fa fa-th',
        active: false,
        groupTitle: false,
        sub: '',
        routing: '/admin/order-list',
        externalLink: '',
        budge: '',
        budgeColor: ''
    },
    {
        title: '従業員一覧',
        icon: 'fa fa-users',
        active: false,
        groupTitle: false,
        sub: '',
        routing: '/admin/worker-list',
        externalLink: '',
        budge: '',
        budgeColor: ''
    },
    {
        title: '財務管理',
        icon: 'fa fa-money',
        active: false,
        groupTitle: false,
        sub: '',
        routing: '/admin/finance',
        externalLink: '',
        budge: '',
        budgeColor: ''
    },
    {
        title: '設定',
        icon: 'fa fa-gear',
        active: false,
        groupTitle: false,
        sub: '',
        routing: '/admin/setting',
        externalLink: '',
        budge: '',
        budgeColor: ''
    }
];
