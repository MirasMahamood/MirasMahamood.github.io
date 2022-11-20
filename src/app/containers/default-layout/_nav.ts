import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Procurement',
    title: true
  },
  {
    name: 'Masters',
    url: '/masters',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Users',
        url: '/masters/users'
      },
      {
        name: 'UoM',
        url: '/masters/uom'
      },
      {
        name: 'Part Master',
        url: '/masters/part-master'
      }
    ]
  },
  {
    name: 'Transaction',
    url: '/transaction',
    iconComponent: { name: 'cilTransfer' },
    children: [
      {
        name: 'Buttons',
        url: '/transaction/buttons'
      },
      {
        name: 'Button groups',
        url: '/transaction/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/transaction/dropdowns'
      },
    ]
  }
];
