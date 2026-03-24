import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

function parsePrefixes(prefixStr) {
  if (!prefixStr || prefixStr.trim() === '' || prefixStr.toLowerCase() === 'none') return []
  return prefixStr.split(',').map(p => p.trim()).filter(Boolean)
}

function parseBoolean(value) {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'on' || value.toLowerCase() === 'true' || value === '1'
  }
  return Boolean(value)
}

function parseLids(lidStr) {
  if (!lidStr || lidStr.trim() === '') return []
  return lidStr.split(',').map(l => l.trim()).filter(Boolean)
}

const CONFIG = {
  MODE: process.env.MODE || 'Public',
  PREFIXES: parsePrefixes(process.env.PREFIXES),
  PORT: parseInt(process.env.PORT) || 3000,
  SESSION: process.env.SESSION || eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5IWlFwaXJVc0dpcitPejdHbWtIdUFhdi9pTWl4MWxudjFlQXdFZVBsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUF6NWNRSmJrVUg3RVJDUXZ6MDZ1ZHR0VHI3L0g5amdSaVEweGJKMVpVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUDVzUXIvZTc4cVpXb2UzMTZzbit4VjVicWRBQUdWdDFVeHlSTGRqejJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMGVJWVRPWlVIbXB6L1FOak4zeU00b2hwaDNFbmtsbU5qZUFHMTJCaEdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJRVlnbWZEUTJMaTc2NmY2RGFMNU45bWdtMHJnSnpjazR3M3gyeDFKbVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllWMWpjMjZMak5ESlJ4dnNYbVJEZFR3eTk5OUZoa0lRN3RGTmMxQUsvaEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFvMjlzbm9kQTRDWTJSRDRydDdRcVhSUWtobk5zdHBBcTRPMlVKTEMzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWVMN09sTVhEVVFuK0d6Qmg2Ym5kZS81eDNCczVJWUgrWE1sT3E3WkpuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVuTXNZTUtwZTZBSEJ0VEZTdlIzNTNLcmdwNXZmNHZkU0ZvNmUwMlZRbTA0YzhWS2txSjZmczVsWUxwUzZTbENRZ1hvaG4rRm9CbWJ0cVFKYUxNQ0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJqME5uSWdEbHZMWExIcEltQWVUa2w5QjBMMlJQR1gyZ3ViWXJxWWE2NXlrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJISlhRTjI5RSIsIm1lIjp7ImlkIjoiMjAxNTU3MzE0MzE2OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRLIHNvdWwgZnJlZSBmYWlyIiwibGlkIjoiMjg3NjQwODM4NTk1MDE6MTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVFA4YkVDRUxldWlNNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyNkpLazEycmRKeUFvdTl5OXdXZzNxQVM3a1p6RFhwemFUeG5YVDZiRkhVPSIsImFjY291bnRTaWduYXR1cmUiOiJMMmFDaUtjWW9MM2ZtRUQ5dUtFdWljQ2ZPV3VOdmJ5cmpTVlVIamlXR2JBYzB0MGVGMUxMWTZGQ05taEl5eDF4MDFzSDdJS3BWYzR0RlBETlM0T1BCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK1J2ck1xRFRpVVJFOUpHUHFFU1VaVXd4UmJSUjlNYzBGQTFXOG5hUG41M29jVyt3OThlWUU1dU12U1pQQ3BURVhyVFMvMkVyUlczNm45eEwyTEIzQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDE1NTczMTQzMTY6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHVpU3BOZHEzU2NnS0x2Y3ZjRm9ONmdFdTVHY3cxNmMyazhaMTArbXhSMSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc0MzI3NjExLCJsYXN0UHJvcEhhc2giOiIzbWwxalMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUw2WSJ9,
  TZ: process.env.TZ || 'Africa/Nairobi',
  ANTICALL: parseBoolean(process.env.ANTICALL || 'off'),
  ANTIDELETE: parseBoolean(process.env.ANTIDELETE || 'on'),
  ANTIEDIT: parseBoolean(process.env.ANTIEDIT || 'on'),
  AUTO_READ: parseBoolean(process.env.AUTO_READ || 'off'),
  AUTO_VIEW: parseBoolean(process.env.AUTO_VIEW || 'on'),
  AUTO_LIKE: parseBoolean(process.env.AUTO_LIKE || 'on'),
  DM_PRESENCE: process.env.DM_PRESENCE || '',
  GRP_PRESENCE: process.env.GRP_PRESENCE || '',
  USER_LID: parseLids(process.env.USER_LID || '28764083859501'),
  OWNER_NUMBER: process.env.OWNER_NUMBER || '201557314316',
  OWNER_NAME: process.env.OWNER_NAME || 'Zika Al-Marazi',
  BOT_NAME: process.env.BOT_NAME || 'Zika Al-Marazi',
  BOT_VERSION: process.env.BOT_VERSION || '3.0.0'
}

export default CONFIG
