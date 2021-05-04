const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const Sport = require('../models/Sport');
const upsert = require('../utils/upsert');
const { Iconv } = require('iconv');

const SportController = () => {
  const sync = async (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '../../db/data.json'));
    const buffer = Buffer.from(file, 'binary');
    const conv = Iconv('windows-1251', 'utf8');
    const body = conv.convert(buffer).toString();
    const apiData = JSON.parse(body);

    //  eslint-disable-next-line no-restricted-syntax
    apiData.forEach((entry) => {
      upsert({
        model: Sport,
        values: {
          id: entry.global_id,
          fullName: entry.FullName,
          shortName: entry.ShortName,
          legalAddress: entry.LegalAddress,
          chiefPosition: entry.ChiefPosition,
          chiefName: entry.ChiefName,
          website: entry.WebSite,
          email: entry.Email,
        },
        condition: { id: entry.global_id },
      });
    });

    return res.status(200).json(apiData);
  };

  const getAll = async (req, res) => {
    try {
      let sports;

      if (req.query.name) {
        sports = await Sport.findAll({
          where: {
            name: {
              [Op.substring]: req.query.name,
            },
          },
        });
      } else {
        sports = await Sport.findAll();
      }

      return res.status(200).json({ sports });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    sync,
    getAll,
  };
};

module.exports = SportController;
