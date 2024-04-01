const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dados de estatísticas do Cristiano Ronaldo
const stats = [
    {
        season: '2001-2003',
        clubs: [
            {
                name: 'Sporting',
                logo: '/badges/sporting-logo.png',
                matches: 31,
                goals: 5,
                assists: 0
            }
        ],
        records: ['Record 1', 'Record 2'],
        titles: ['Serie A']
    },
    {
        season: '2003-2009',
        clubs: [
            {
                name: 'Manchester United',
                logo: '/badges/manchester-united-logo.png',
                matches: 292,
                goals: 118,
                assists: 0
            }
        ],
        records: ['Record 1', 'Record 2'],
        titles: ['Copa da Itália']
    },
    {
        season: '2009-2018',
        clubs: [
            {
                name: 'Real Madrid',
                logo: '/badges/real-madrdid-logo.png',
                matches: 438,
                goals: 450,
                assists: 0
            }
        ],
        records: ['Record 1', 'Record 2'],
        titles: ['Copa da Itália']
    },
    {
        season: '2018-2021',
        clubs: [
            {
                name: 'Juventus',
                logo: '/badges/juventus-logo.png',
                matches: 134,
                goals: 101,
                assists: 0
            }
        ],
        records: ['Record 1', 'Record 2'],
        titles: ['Copa da Itália']
    },
    {
        season: '2021-2022',
        clubs: [
            {
                name: 'Manchester United',
                logo: '/badges/manchester-united-logo.png',
                matches: 54,
                goals: 27,
                assists: 0
            }
        ],
        records: ['Record 1', 'Record 2'],
        titles: ['Copa da Itália']
    },
    {
        season: '2023-Today',
        clubs: [
            {
                name: 'Al-Nassr',
                logo: '/badges/al-nassr-logo.png',
                matches: 59,
                goals: 53,
                assists: 0
            }
        ],
        records: ['Record 1', 'Record 2'],
        titles: ['Copa da Itália']
    }
    ,
    {
        season: '2001-Today',
        clubs: [
            {
                name: 'Portugal',
                logo: '/badges/portugal-logo.png',
                matches: 229,
                goals: 139,
                assists: 0
            }
        ],
        records: ['Record 1', 'Record 2'],
        titles: ['Copa da Itália']
    }

];

// Rota para obter todas as estatísticas
app.get('/api/stats', (req, res) => {
    res.json(stats);
});

// Rota para obter estatísticas de uma temporada específica
app.get('/api/stats/:season', (req, res) => {
    const season = req.params.season;
    const stat = stats.find(stat => stat.season === season);

    if (!stat) {
        return res.status(404).json({ error: 'Season not found' });
    }

    res.json(stat);
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});