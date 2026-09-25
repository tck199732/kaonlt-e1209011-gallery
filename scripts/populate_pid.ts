import fs from 'node:fs'
import path from 'node:path'

const figuresRoot = path.resolve('public/figures/pid')
const outputRoot = path.resolve('src/pid/')

const requiredFigures = [
    'CTime_eKCoinTime_ROC1.png',
    'CTime_eKCoinTime_ROC1_vs_P_kin_secondary_MMK.png',
    'H_cal_etotnorm.png',
    'H_cal_etottracknorm.png',
    'H_cal_etottracknorm_vs_H_cer_npeSum.png',
    'H_cal_etottracknorm_vs_P_kin_secondary_MMK.png',
    'H_cer_npeSum.png',
    'H_cer_npeSum_vs_P_kin_secondary_MMK.png',
    'H_dc_x_fp.png',
    'H_dc_x_fp_vs_P_kin_secondary_MMK.png',
    'H_dc_xp_fp.png',
    'H_dc_xp_fp_vs_P_kin_secondary_MMK.png',
    'H_dc_y_fp.png',
    'H_dc_y_fp_vs_P_kin_secondary_MMK.png',
    'H_dc_yp_fp.png',
    'H_dc_yp_fp_vs_P_kin_secondary_MMK.png',
    'H_gtr_dp.png',
    'H_gtr_ph.png',
    'H_gtr_th.png',
    'H_gtr_x.png',
    'H_gtr_y.png',
    'H_hod_goodscinhit.png',
    'H_kin_primary_Q2.png',
    'H_kin_primary_Q2_vs_P_kin_secondary_MMK.png',
    'H_kin_primary_W.png',
    'H_kin_primary_W_vs_P_kin_secondary_MMK.png',
    'H_kin_primary_epsilon.png',
    'H_kin_primary_epsilon_vs_P_kin_secondary_MMK.png',
    'P_aero_npeSum.png',
    'P_aero_npeSum_vs_CTime_eKCoinTime_ROC1.png',
    'P_aero_npeSum_vs_P_gtr_beta.png',
    'P_aero_npeSum_vs_P_gtr_dp.png',
    'P_aero_npeSum_vs_P_kin_secondary_MMK.png',
    'P_aero_npeSum_vs_RFTime_SHMS_RFtimeDist.png',
    'P_aero_xAtAero_vs_P_aero_yAtAero.png',
    'P_cal_etotnorm.png',
    'P_cal_etotnorm_vs_P_kin_secondary_MMK.png',
    'P_cal_etottracknorm.png',
    'P_cal_etottracknorm_vs_P_aero_npeSum.png',
    'P_cal_etottracknorm_vs_P_kin_secondary_MMK.png',
    'P_dc_x_fp.png',
    'P_dc_x_fp_vs_P_kin_secondary_MMK.png',
    'P_dc_xp_fp.png',
    'P_dc_xp_fp_vs_P_kin_secondary_MMK.png',
    'P_dc_y_fp.png',
    'P_dc_y_fp_vs_P_kin_secondary_MMK.png',
    'P_dc_yp_fp.png',
    'P_dc_yp_fp_vs_P_kin_secondary_MMK.png',
    'P_gtr_beta.png',
    'P_gtr_dp.png',
    'P_gtr_dp_vs_P_kin_secondary_MandelT.png',
    'P_gtr_ph.png',
    'P_gtr_th.png',
    'P_gtr_x.png',
    'P_gtr_y.png',
    'P_hgcer_npeSum.png',
    'P_hgcer_npeSum_vs_P_aero_npeSum.png',
    'P_hgcer_npeSum_vs_P_kin_secondary_MMK.png',
    'P_hgcer_xAtCer_vs_P_hgcer_yAtCer.png',
    'P_hod_goodscinhit.png',
    'P_hod_goodscinhit_vs_P_kin_secondary_MMK.png',
    'P_kin_secondary_MMK.png',
    'P_kin_secondary_MMK_vs_H_gtr_dp.png',
    'P_kin_secondary_MMK_vs_P_gtr_beta.png',
    'P_kin_secondary_MMK_vs_P_gtr_dp.png',
    'P_kin_secondary_MMK_vs_P_kin_secondary_MandelT.png',
    'P_kin_secondary_MMpi.png',
    'P_kin_secondary_MandelT_vs_P_kin_secondary_ph_xq.png',
    'P_kin_secondary_ph_xq_vs_P_kin_secondary_MMK.png',
    'RFTime_SHMS_RFtimeDist.png',
    'RFTime_SHMS_RFtimeDist_vs_CTime_eKCoinTime_ROC1.png',
    'RFTime_SHMS_RFtimeDist_vs_P_kin_secondary_MMK.png',
    'RF_Time_SHMS_RFtimeDist_vs_P_gtr_dp.png',
]


fs.mkdirSync(outputRoot, { recursive: true })

const folders = fs
  .readdirSync(figuresRoot, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)

for (const folder of folders) {
  const folderPath = path.join(figuresRoot, folder)

  const figures = fs
    .readdirSync(folderPath)
    .filter(file => file.endsWith('.png'))
    .filter(file => fs.statSync(path.join(folderPath, file)).isFile())
    .filter(file => requiredFigures.includes(file))

  const content = `# ${folder}

${figures
  .map(
    (file, index) => `

## ${file.replace('.png', '')}
<figure class="doc-figure">
    <img src="${figuresRoot}/${folder}/${file}" alt="Figure ${index + 1}" />
</figure>
`
  )
  .join('\n')}
`

  fs.writeFileSync(
    path.join(outputRoot, `${folder}.md`),
    content.trim() + '\n'
  )

  console.log(`Generated ${folder}.md`)
}