const vagas = [
    {
        id: 1,
        cargo: 'Digital Marketing Coordinator',
        empresa:'Unilever',
        local: 'São Paulo, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2316894381/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=ROaVIpMwsXQ3vxCAMkf1Tg%3D%3D&trk=flagship3_search_srp_jobs'
    },
    {
        id: 2,
        cargo: 'Digital Marketing Analyst - Lead Gen',
        empresa:'Rock Content',
        local: 'Belo Horizonte, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2332396936/?eBP=JOB_SEARCH_ORGANIC&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=SzT71Yo3B4oOMal35pytLw%3D%3D&trk=flagship3_search_srp_jobs'
    },
    {
        id: 3,
        cargo: 'Especialista de Marketing B2B',
        empresa:'Creditas',
        local: 'São Paulo, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2220717332/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=v5BdowIajManGUJn%2FzV8QA%3D%3D&trk=flagship3_search_srp_jobs'
    },
    {
        id: 4,
        cargo: 'Analista de Marketing Digital',
        empresa:'Grupo Malwee',
        local: 'São Paulo, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2295374808/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=IN_NETWORK&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=DcoHP0u%2BiyK1U%2B4hBkGQEA%3D%3D&trk=flagship3_search_srp_jobs'
    },
    {
        id: 5,
        cargo: 'Digital Marketing Specialist',
        empresa:'Globant',
        local: 'Salvador, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2273006210/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=7xK3D8XpW3ZG6y%2F1PkV2VA%3D%3D&trk=flagship3_search_srp_jobs'
    },
    {
        id: 6,
        cargo: 'Analista de Marketing Digital Pleno (Performance)',
        empresa:'SKY',
        local: 'São Paulo, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2323240085/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=Kanwo7yRiFY1uHq8tccveg%3D%3D&trk=flagship3_search_srp_jobs'
    },
    {
        id: 7,
        cargo: 'Analista do Digital (Copywriter)',
        empresa:'BTG Pactual',
        local: 'São Paulo, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2023842291/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=O%2F3vuY6AMxGeZK%2BFiY0qSw%3D%3D&trk=flagship3_search_srp_jobs'
    },
    {
        id: 8,
        cargo: 'Analista de Marketing Digital Sênior',
        empresa:'Vivo (Telefônica Brasil)',
        local: 'São Paulo, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2273049804/?eBP=CwEAAAF2NAincnZ-yAnN6zvW37_koUPqTJ15rVULgy57u16ipoXwMknx348t_4ZIRRSO2fAsQSU9QhcISg-fsW-ZPl8YWOVz1RHK0J5DH01w67OqumsW-Wcu-giygfwS5Zi7yChFaN3Hco7B4IOC1hkzjR1aX2BAVRFTCieeCmgwy6DaICf6bTGReC4WNIKpQdxTvC3nyP36pDbbjUpAyK0aAioyIn6WtEnLHeCzw3LJYR_d8Vocnbk0zgRdWiN63wXqjEikBrrvqRQjNuVEHQyNdAXvcOCcIuqCgnFpULwQd0vCSzjukYk9x20c90-3PUEUYbB7V1xXR9fJlI_yWn84H51fcMOPH2_MUthL8XPxn8mmZ1I22hKTJ8gyECJy5L5alBu0WY_cM2w&recommendedFlavor=IN_NETWORK&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=P%2F8ENQo8u2X1QQpnWz8gtQ%3D%3D&trk=flagship3_search_srp_jobs'
    },
    {
        id: 9,
        cargo: 'Marketing Lead',
        empresa:'AMARO',
        local: 'São Paulo, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2258606712/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=Rf8oL%2BJYQeooa1ddwcS9FQ%3D%3D&trk=flagship3_search_srp_jobs'
    },
    {
        id: 10,
        cargo: 'Marketing Analytics Associate, LATAM',
        empresa:'Zendesk',
        local: 'São Paulo, Brasil',        
        link: 'https://www.linkedin.com/jobs/view/2303374027/?eBP=CwEAAAF2NAinchC1CYDkjpKVsVDsVQa6O3nEo77PnECTkjYyKgJc6Cl7neLowvsdL1zVQD05zrnjK3ca0HgjbrqcYrGlZx9vaLsAliMDLR2gkGVnddpu_rAnnuWiKPP1D0AFx-1O1Rve_eDuwU-YZdDPHLVAqEalBmZ4FyiM4El8Fhcahu93L48FPN2yWPz3h-OxoiP3IJ_AwGqP23upKYn0PNTG84GPBHSTkK3Rhi8_prvnHktOBhWAISyoTkdzFKKXhSBaSdfQvRfieusnxnDf0nuG1bv_3XFJu_jiz7qzBXxcoASooOMkvKCvp5hhPfwPsf0m69Jx6PEL73N3JnE_ZxLd-GYY644Rh26KKYsdjY_azKKtVRGnJKz8-9dj0NswPQ5FqoehuOBgzg&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=YC%2Bc093ryV2%2FcZlwjePH9A%3D%3D&trackingId=naGbvWEsoeIvnRAGKzEqkw%3D%3D&trk=flagship3_search_srp_jobs'
    }
]

export default vagas