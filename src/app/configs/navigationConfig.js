import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'example-component',
    title: 'Example',
    translate: 'EXAMPLE',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'example',
  },

  {
    id: 'data_project',
    title: 'data_project',
    translate: 'DATA_PROJECT',
    type: 'item',
    icon: 'heroicons-outline:clipboard-list',
    url: 'data-project',
  },
      {
        id: 'Engineering',
        title: 'engineering',
        translate: 'ENGINEERING',
        type: 'collapse',
        icon: 'heroicons-outline:chip',
        children: [
          {
            id: 'Engineering_Doc',
            title: 'Engineering Doc',
            type: 'item',
            icon: 'heroicons-outline:document',
            url: 'doc-eng',
          },
          {
            id: 'Commg_Tech_Doc_Prep',
            title: 'Commg Technical Doc Prep',
            type: 'item',
            icon: 'heroicons-outline:document',
            url: 'doc-com-tech',
          },
        ],
      },
         
                    {
                      id: 'Procurment',
                      title: 'Procurment',
                      translate: 'PROCURMENT',
                      type: 'collapse',
                      icon: 'heroicons-outline:shopping-cart',
                      children: [
                        {
                          id: 'Vendor_Data_Doc',
                          title: 'Vendor Data & Doc',
                          type: 'item',
                          icon: 'heroicons-outline:document',
                          url: 'doc-vendor-data',
                        },
                      ],
                    },

                        {
                          id: 'Construction',
                          title: 'Construction',
                          translate: 'CONSTRUCTION',
                          type: 'collapse',
                          icon: 'material-twotone:add_road',
                          children: [
                            {
                              id: 'QC_Test_Report',
                              title: 'QC Test Report',
                              type: 'item',
                              icon: 'heroicons-outline:document',
                              url: 'cons-qc-test',
                            },
                            {
                              id: 'Cons_Test_Report',
                              title: 'Construction Test Report',
                              type: 'item',
                              icon: 'heroicons-outline:document',
                              url: 'cons-test-report',
                            },
                            {
                              id: 'Cons_Punchlist',
                              title: 'Construction Punchlist',
                              type: 'item',
                              icon: 'heroicons-outline:document',
                              url: 'cons-punchlist',
                            },
                          
                          ],
                        },
                              {
                                id: 'Commissioning',
                                title: 'Commissioning',
                                translate: 'COMMISSIONING',
                                type: 'collapse',
                                icon: 'heroicons-outline:collection',
                                children: [
                                  {
                                    id: 'Air_Blowing',
                                    title: 'Air Blowing',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'air-blowing',
                                  },
                                  {
                                    id: 'Chemical_Cleaning',
                                    title: 'Chemical Cleaning',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'chemical-cleaning',
                                  },
                                  {
                                    id: 'Dry_Test_Running',
                                    title: 'Dry Test Running',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'dry-run-test',
                                  },
                                  {
                                    id: 'Flange_Management',
                                    title: 'Flange Management',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'flange-manage',
                                  },
                                  {
                                    id: 'Leak_Test',
                                    title: 'Leak Test',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'leak-test',
                                  },
                                  {
                                    id: 'Loop_Function',
                                    title: 'Loop & Function Test',
                                    type: 'collapse',
                                    icon: 'material-twotone:360',
                                    children: [
                                          {
                                            id: 'Analog_Test',
                                            title: 'Analog Test',
                                            type: 'item',
                                            icon: 'heroicons-outline:document',
                                            url: 'loop-analog-test',
                                          },
                                          {
                                            id: 'Digital_Test',
                                            title: 'Digital Test',
                                            type: 'item',
                                            icon: 'heroicons-outline:document',
                                            url: 'loop-digital-test',
                                          },
                                          {
                                            id: 'Communication_Test',
                                            title: 'Communication Test',
                                            type: 'item',
                                            icon: 'heroicons-outline:document',
                                            url: 'loop-comm-test',
                                          },
                                          
                                          {
                                            id: 'Control_Logic_Test',
                                            title: 'Control Logic Test',
                                            type: 'item',
                                            icon: 'heroicons-outline:document',
                                            url: 'loop-control-logic-test',
                                          },
                                          {
                                            id: 'ESD_Test',
                                            title: 'ESD Test',
                                            type: 'item',
                                            icon: 'heroicons-outline:document',
                                            url: 'loop-esd-test',
                                          },
                                          {
                                            id: 'Fire_Gas_Logic_Test',
                                            title: 'Fire & GAS Logic Test',
                                            type: 'item',
                                            icon: 'heroicons-outline:document',
                                            url: 'loop-fire-gas',
                                          },
                                    ]
                                  },
                                  {
                                    id: 'Motor_solo_Run',
                                    title: 'Motor Solo Run',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'motor-solo-run',
                                  },
                                  {
                                    id: 'Pipeline_Cleaning',
                                    title: 'Pipeline Cleaning',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'pipeline-cleaning',
                                  },
                                  {
                                    id: 'Pipeline_Gauging',
                                    title: 'Pipeline Gauging',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'pipeline-gauging',
                                  },
                                  {
                                    id: 'Pump_Mechanical_Run',
                                    title: 'Pump Mechanical Run',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'pump-mecha',
                                  },
                                  {
                                    id: 'Water_Flushing',
                                    title: 'Water Flushing',
                                    type: 'item',
                                    icon: 'heroicons-outline:document',
                                    url: 'water-flushing',
                                  },
                                ],
                              },                                  
                              {
                                id: 'Stakeholder',
                                title: 'Stakeholder',
                                translate: 'STAKEHOLDER',
                                type: 'collapse',
                                icon: 'heroicons-outline:user-group',
                                children: [
                                      {
                                        id: 'Owner',
                                        title: 'Owner',
                                        type: 'item',
                                        icon: 'heroicons-outline:document',
                                        url: 'stake-owner',
                                      },
                                      {
                                        id: 'Contractor',
                                        title: 'Contractor',
                                        type: 'item',
                                        icon: 'heroicons-outline:document',
                                        url: 'stake-contractor',
                                      },
                                      {
                                        id: 'Subcontractor',
                                        title: 'Subcon / Vendor',
                                        type: 'item',
                                        icon: 'heroicons-outline:document',
                                        url: 'stake-subcontractor',
                                      },
                                    ]
                              },

                              {
                                id: 'User',
                                title: 'User',
                                translate: 'USER',
                                type: 'item',
                                icon: 'heroicons-outline:user',
                                url: 'user',
                              },



];

export default navigationConfig;
