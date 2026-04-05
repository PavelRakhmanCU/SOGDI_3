/* eslint-disable max-len */
// Gallery image URLs: edit the *_GALLERY_RAW arrays below, then save (entries are
// deduplicated and non-image assets like .mov are skipped at runtime).
import { normalizeGalleryEntries } from "./galleryNormalize.js";

export const GALLERY_CATEGORY_META = {
  "color": {
    "title": "Color tattoos",
    "intro": "Selected full-color work — realism, saturation, and painterly pieces from the studio. New work is added here over time."
  },
  "grayscale": {
    "title": "Grayscale tattoos",
    "intro": "Black and grey tattooing — selected pieces from the studio."
  },
  "coverup": {
    "title": "Cover-up tattoos",
    "intro": "",
    "body": "Cover-ups usually need to be larger than the original tattoo and often require stronger contrast, detail, or color to achieve the best result. Fine line or very light designs typically don’t work well for cover-ups, but could be discussed, if you have smaller or lighter tattoo.\n\nMy goal is to create a result where it’s not noticeable as a cover-up. To achieve this, I often use a layering technique, building pigment over multiple sessions spaced about 4 weeks apart. Depending on the tattoo, it may take 1–3 sessions or more.\n\nOlder or lighter tattoos are easier to work with and can sometimes be completed in one session or with an additional pass (charged hourly, not considered a touch-up). Choosing a design that is slightly larger, darker, or more detailed can increase the chances of completing it in one shot.\nDesigns with texture and depth in colour (like florals, leaves, birds, etc.) work best, as they allow me to naturally blend and hide the old tattoo, but any idea could be discussed, as maybe for your exact case it’s will work.\nI usually ask people send good picture of current tattoo in daylight and what ideally they want have instead and after that I will tell what realistically will be possible, or how I can make it happen.\nEvery case is different, so I’ll need to see a photo of your current tattoo and your idea to give you an accurate plan"
  },
  "post-mastectomy-reconstruction": {
    "title": "Post-mastectomy reconstruction tattoos",
    "intro": "",
    "body": "For post-mastectomy reconstruction, it’s recommended to wait at least six months after your last surgery. However, this timeline can vary depending on your skin type, personal healing process, and your doctor’s advice.\nI offer reconstructive nipple tattoos and scar camouflage free of charge to support anyone recovering from a traumatic experience.\nIf you’re interested in getting a decorative tattoo in the same area, it will be charged at the regular rate.\nPlease note that perfectly matching your natural skin tone is often impossible. If your scars are faint, I recommend allowing them to heal naturally.\nThis procedure is most effective for vibrant or visible scars (pink, red, purple, or raised/keloid tissue), as it can make them significantly less noticeable and improve the overall texture of the skin."
  }
};

const COLOR_GALLERY_RAW = [
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348916/2024-03-07_SOGDI_TATTOO_scrp19.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348916/2024-01-10_SOGDI_TATTOO_II_rmvhda.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348915/2024-03-29_SOGDI_TATTOO-3_nxny2p.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348914/2024-07-03_SOGDI_TATTOO_edohqg.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348914/2024-07-03_SOGDI_TATTOO_edohqg.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348914/2024-07-03_SOGDI_TATTOO_edohqg.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348912/2024-11-30_SOGDI_TATTOO_jfa86t.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348911/2025-06-04_SOGDI_TATTOO_tsh4bv.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348910/2025-09-10_SOGDI_TATTOO_slmilo.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348909/2025-11-01_SOGDI_TATTOO_VI_vlzlin.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348908/%D0%A4%D0%BE%D1%82%D0%BE_3-29-26_08_43_03_afhr45.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348907/%D0%A4%D0%BE%D1%82%D0%BE_3-29-26_08_44_04_qhqktu.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348907/%D0%A4%D0%BE%D1%82%D0%BE_10-2-23_20_45_06_hurmvt.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348906/%D0%A4%D0%BE%D1%82%D0%BE_10-27-25_19_48_10_zbtz3f.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348906/%D0%A4%D0%BE%D1%82%D0%BE_11-2-23_06_36_30_ipgpqy.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348906/%D0%A4%D0%BE%D1%82%D0%BE_11-2-23_06_36_30_ipgpqy.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348904/2025-11-15_SOGDI_TATTOO_xwtnrf.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348904/2025-11-13_SOGDI_TATTOO-4_jzwatq.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348903/2025-11-01_SOGDI_TATTOO_II_i0hmbx.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348902/2025-10-11_SOGDI_TATTOO_II_vn4puw.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348902/2025-10-08_SOGDI_TATTOO_VI_j8hsjj.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348902/2025-10-05_SOGDI_TATTOO-14_n4hkhi.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348901/2025-09-26_SOGDI_TATTOO-3_xvk99g.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348900/2025-08-28_SOGDI_TATTOO_zvzrxt.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348900/2025-09-08_SOGDI_TATTOO_II_vbk9zk.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348898/2025-08-14_SOGDI_TATTOO-4_ei9v8k.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348897/2025-08-08_SOGDI_TATTOO_III_efayoe.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348897/2025-08-08_SOGDI_TATTOO_II_uvnekb.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348897/2025-08-08_SOGDI_TATTOO_II_uvnekb.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348896/2025-06-28_SOGDI_TATTOO_III_tsuioh.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348896/2025-06-25_SOGDI_TATTOO_II_wogwfr.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348895/2025-06-21_SOGDI_TATTOO_III_z9tdms.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348894/2025-05-11_SOGDI_TATTOO_rxthuv.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348894/2025-05-11_SOGDI_TATTOO_IV_tqtacx.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348894/2025-05-11_SOGDI_TATTOO_IV_tqtacx.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348893/2025-05-11_SOGDI_TATTOO_II_aqassc.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348893/2025-03-20_SOGDI_TATTOO-2_roel5b.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348892/2025-03-18_SOGDI_TATTOO_zxqxyf.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348892/2025-03-04_SOGDI_TATTOO_pfwhtx.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348891/2025-02-28_SOGDI_TATTOO_wkpxdd.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348891/2025-02-28_SOGDI_TATTOO_wkpxdd.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348891/2025-02-28_SOGDI_TATTOO-2_gzghbi.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348890/2025-02-22_SOGDI_TATTOO_lluyuk.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348890/2025-02-25_SOGDI_TATTOO_snicx8.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348889/2025-02-15_SOGDI_TATTOO_III_q7a6hc.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348889/2025-01-24_SOGDI_TATTOO_II_iuijuc.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348887/%D0%A4%D0%BE%D1%82%D0%BE_2-13-26_18_14_58_yhvam6.png"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348887/%D0%A4%D0%BE%D1%82%D0%BE_2-13-26_18_15_02_jgrfwx.png"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348886/%D0%A4%D0%BE%D1%82%D0%BE_2-13-26_18_15_13_v2ds00.png"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348886/%D0%A4%D0%BE%D1%82%D0%BE_1-19-26_08_52_40_jde19q.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348885/%D0%A4%D0%BE%D1%82%D0%BE_1-23-26_21_28_02_xnd84x.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348884/%D0%A4%D0%BE%D1%82%D0%BE_2-21-26_04_14_48_yap6lr.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348884/%D0%A4%D0%BE%D1%82%D0%BE_3-8-26_08_14_38_evrdkd.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348884/%D0%A4%D0%BE%D1%82%D0%BE_3-8-26_08_14_13_tkgotc.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348883/%D0%A4%D0%BE%D1%82%D0%BE_3-28-26_08_33_47_elyj5v.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348883/%D0%A4%D0%BE%D1%82%D0%BE_3-28-26_08_34_25_id2k5y.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348882/%D0%A4%D0%BE%D1%82%D0%BE_3-28-26_08_34_08_lerhvc.jpg"
  }
];
const GRAYSCALE_GALLERY_RAW = [
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349172/2024-06-07_SOGDI_TATTOO_jojfd9.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349171/2024-07-09_SOGDI_TATTOO_uq7cx5.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349170/2024-08-13_SOGDI_TATTOO_fvuxb4.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349169/2024-08-31_SOGDI_TATTOO_ddhtm3.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349168/2024-09-01_SOGDI_TATTOO_II_l9dyke.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349167/2024-09-19_SOGDI_TATTOO-2_qxusvc.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349167/2024-09-19_SOGDI_TATTOO_yf8pps.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349164/2024-12-20_SOGDI_TATTOO-4_1_c3kbmu.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349164/2024-12-10_SOGDI_TATTOO_lagcdl.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349163/2024-12-17_SOGDI_TATTOO_rwfmya.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349162/2024-12-20_SOGDI_TATTOO-4_vcww8u.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349161/2024-12-28_SOGDI_TATTOO_II_z1p05c.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349160/%D0%A4%D0%BE%D1%82%D0%BE_10-27-25_19_48_10_3_j9tkxj.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349158/2025-07-02_SOGDI_TATTOO_II_lcyqyk.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349157/2025-06-14_SOGDI_TATTOO_IV_rxhvba.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349157/2025-06-14_SOGDI_TATTOO_IV_rxhvba.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349155/2025-05-27_SOGDI_TATTOO_qd4dti.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349154/2025-05-21_SOGDI_TATTOO-2_wilwaf.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349154/2025-05-17_SOGDI_TATTOO_ondgcq.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349153/2025-05-03_SOGDI_TATTOO_IV_xa4wza.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349152/2025-05-03_SOGDI_TATTOO_II_ppj9um.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349151/2025-04-23_SOGDI_TATTOO_msb4vl.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349150/2025-04-23_SOGDI_TATTOO-3_d38gdr.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349149/2025-03-14_SOGDI_TATTOO-2_v1okro.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349149/2025-03-01_SOGDI_TATTOO_qpltko.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349148/2025-02-29_SOGDI_TATTOO-2_k2xv09.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349147/2025-02-19_SOGDI_TATTOO_IV_vlrvdj.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349147/2025-01-24_SOGDI_TATTOO_qv218j.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349145/2025-01-08_SOGDI_TATTOO_wfly5u.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349145/%D0%A4%D0%BE%D1%82%D0%BE_1-4-26_06_58_18_fw9c8j.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349144/%D0%A4%D0%BE%D1%82%D0%BE_1-4-26_06_59_06_wqzjk8.jpg"
  }
];
const COVERUP_GALLERY_RAW = [
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349004/2024-06-28_SOGDI_TATTOO_szburc.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349003/2024-07-04_SOGDI_TATTOO-3_ctwzvf.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349001/2025-06-12_SOGDI_TATTOO_tjyih7.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349000/2025-08-30_SOGDI_TATTOO_III_of0wtu.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349000/%D0%A4%D0%BE%D1%82%D0%BE_1-15-26_09_40_17_ljs8lt.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775349000/%D0%A4%D0%BE%D1%82%D0%BE_1-15-26_09_40_17_ljs8lt.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348999/%D0%A4%D0%BE%D1%82%D0%BE_1-15-26_09_43_14_jobz4h.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/video/upload/v1775348998/CA42CF33-016E-4E49-82DE-5676672AA986_mgkk4y.mov"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348997/IMG_8221_ic0fwe.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348997/D94529F3-483A-4611-9C9D-CEE7D5BC738C_xhgfpk.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348996/IMG_8216_vtt0jg.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348995/IMG_8215_dk1ouo.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348995/IMG_8217_wl9ewi.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348994/IMG_8214_xlssex.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348994/IMG_8211_y5dp2k.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348994/IMG_8213_gkvovz.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348993/IMG_8212_ouoke6.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348992/IMG_8205_nscucq.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348992/IMG_8201_pua11z.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348991/IMG_8196_cz6nrh.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348990/IMG_8198_zo4zec.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348990/IMG_8194_ceme2w.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775348989/IMG_8193_dtujhz.jpg"
  }
];
const POST_MASTECTOMY_GALLERY_RAW = [
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775350249/%D0%A4%D0%BE%D1%82%D0%BE_11-4-25_22_37_31_fmhax8.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775350260/%D0%A4%D0%BE%D1%82%D0%BE_6-6-23_18_29_42_m9xzxa.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775350260/%D0%A4%D0%BE%D1%82%D0%BE_6-6-23_18_29_42_m9xzxa.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775350251/%D0%A4%D0%BE%D1%82%D0%BE_3-1-25_19_42_53_gsofxr.jpg"
  },
  {
    "imageURL": "https://res.cloudinary.com/dicvjx88i/image/upload/v1775350249/%D0%A4%D0%BE%D1%82%D0%BE_11-4-25_22_37_31_1_umfflc.jpg"
  }
];

export const GALLERY_IMAGES = {
  color: normalizeGalleryEntries(COLOR_GALLERY_RAW),
  grayscale: normalizeGalleryEntries(GRAYSCALE_GALLERY_RAW),
  coverup: normalizeGalleryEntries(COVERUP_GALLERY_RAW),
  "post-mastectomy-reconstruction": normalizeGalleryEntries(
    POST_MASTECTOMY_GALLERY_RAW
  ),
};
