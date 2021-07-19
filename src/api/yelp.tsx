import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer d9l5pbSUm1X3Xgihb24NzgM2k8MFR45ni1x3jzfQ4aRdD_K9pgYh1CF_POtl7ci764ezPwUAGzd2qNI2nASpMawnw3SEm_wj1C_e1vOnjjcN2bHCO4OLiT-F0131YHYx'
    }
});