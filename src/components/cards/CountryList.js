import React,{useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedCard from './OutlinedCards';


const useStyles = makeStyles((theme) => ({
    card1: {
      width: 200,
      padding: 10,
      justifyContent: 'center',
      margin:20
    },
  
    card2: {
      width: 200,
      padding: 10,
      justifyContent: 'center',
      margin:10
    },
  
    card3: {
      width: 200,
      padding: 10,
      justifyContent: 'center',
      margin:20,
    },
    
    
    title: {
      fontSize: 14,
    },
    content: {
      textAlign:'left',
      margin: 0
  
    },
    pos: {
      marginBottom: 12,
    },
    container:{
       display: 'flex' ,
       flexDirection: 'horizontal',
       margin: 20,
       justifyContent: 'center',
       alignItems: 'center',
    },
    h: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 25
    },
    formControl: {
        margin: theme.spacing(1),
        width: 400,
        


      },
      selectEmpty: {
        marginTop: theme.spacing(2),
       
      },
  }))

export default function CountryList(){

    const classes = useStyles();
    const [activeCases, setactiveCases] = useState();
    const [deaths, setdeaths] = useState();
    const [recovered, setrecovered] = useState();
    const [country, setcountry] = useState();
    let [countryCode, setCountryCode] = useState();
    const [selectItem, setSelectItem] = useState('');
    const [isFetching, setFetching] = useState(false);

    
    

    
    useEffect ( () => {

      async function fetchGlobalData() {

        setFetching(true)
    
        const apiRes = await fetch(`http://coronavirus-19-api.herokuapp.com/countries/${countryCode}`)
        const data = await apiRes.json();
        setactiveCases(data.active);
       setdeaths(data.deaths);
       setrecovered(data.recovered);
       setcountry(data.country)
       
            
        }
        fetchGlobalData();
        setFetching(false)
      
  })

  



    


    const handlechange = (e) => {


        
        setSelectItem(e.target.value)
     
        setCountryCode(e.target.value);
        
        
    }

   
    return(
        <div>
            

            <div className={classes.container}>

            <Typography className={classes.h} variant="h5" component="h2" color="prim" >
         Country Data
        </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Country</InputLabel>
        <Select
         value={selectItem} 
         onChange={handlechange}
         labelId="demo-simple-select-label"
         id="demo-simple-select"
          label="Select Country"
          
        >
          <MenuItem value="">
            <em>Country List</em>
          </MenuItem >
          <MenuItem value={'UAE'}>UAE</MenuItem>
<MenuItem value={'Afghanistan'}>Afghanistan</MenuItem>
<MenuItem value={'Albania'}>Albania</MenuItem>
<MenuItem value={'Armenia'}>Armenia</MenuItem>
<MenuItem value={'Angola'}>Angola</MenuItem>
<MenuItem value={'Argentina'}>Argentina</MenuItem>
<MenuItem value={'Austria'}>Austria</MenuItem>
<MenuItem value={'Australia'}>Australia</MenuItem>
<MenuItem value={'Azerbaijan'}>Azerbaijan</MenuItem>
<MenuItem value={'Bosnia and Herzegovina'}>Bosnia and Herzegovina</MenuItem>
<MenuItem value={'Bangladesh'}>Bangladesh</MenuItem>
<MenuItem value={'Belgium'}>Belgium</MenuItem>
<MenuItem value={'Burkina Faso'}>Burkina Faso</MenuItem>
<MenuItem value={'Bulgaria'}>Bulgaria</MenuItem>
<MenuItem value={'Burundi'}>Burundi</MenuItem>
<MenuItem value={'Benin'}>Benin</MenuItem>
<MenuItem value={'Brunei Darussalam'}>Brunei Darussalam</MenuItem>
<MenuItem value={'Bolivia'}>Bolivia</MenuItem>
<MenuItem value={'Brazil'}>Brazil</MenuItem>
<MenuItem value={'Bahamas'}>Bahamas</MenuItem>
<MenuItem value={'Bhutan'}>Bhutan</MenuItem>
<MenuItem value={'Botswana'}>Botswana</MenuItem>
<MenuItem value={'Belarus'}>Belarus</MenuItem>
<MenuItem value={'Belize'}>Belize</MenuItem>
<MenuItem value={'Canada'}>Canada</MenuItem>
<MenuItem value={'Democratic Republic of Congo'}>Democratic Republic of Congo</MenuItem>
<MenuItem value={'DR Congo'}>DR Congo</MenuItem>
<MenuItem value={'Central African Republic'}>Central African Republic</MenuItem>
<MenuItem value={'Congo'}>Congo</MenuItem>
<MenuItem value={'Switzerland'}>Switzerland</MenuItem>
<MenuItem value={'Ivory Coast'}>Ivory Coast</MenuItem>
<MenuItem value={'Chile'}>Chile</MenuItem>
<MenuItem value={'Cameroon'}>Cameroon</MenuItem>
<MenuItem value={'China'}>China</MenuItem>
<MenuItem value={'Colombia'}>Colombia</MenuItem>
<MenuItem value={'Costa Rica'}>Costa Rica</MenuItem>
<MenuItem value={'Cuba'}>Cuba</MenuItem>
<MenuItem value={'Cyprus'}>Cyprus</MenuItem>
<MenuItem value={'Czechia'}>Czechia</MenuItem>
<MenuItem value={'Germany'}>Germany</MenuItem>
<MenuItem value={'Djibouti'}>Djibouti</MenuItem>
<MenuItem value={'Denmark'}>Denmark</MenuItem>
<MenuItem value={'Dominican Republic'}>Dominican Republic</MenuItem>
<MenuItem value={'Diamond Princess'}>Diamond Princess</MenuItem>
<MenuItem value={'Algeria'}>Algeria</MenuItem>
<MenuItem value={'Ecuador'}>Ecuador</MenuItem>
<MenuItem value={'Estonia'}>Estonia</MenuItem>
<MenuItem value={'Egypt'}>Egypt</MenuItem>
<MenuItem value={'Western Sahara'}>Western Sahara</MenuItem>
<MenuItem value={'Eritrea'}>Eritrea</MenuItem>
<MenuItem value={'Spain'}>Spain</MenuItem>
<MenuItem value={'Ethiopia'}>Ethiopia</MenuItem>
<MenuItem value={'Finland'}>Finland</MenuItem>
<MenuItem value={'Fiji'}>Fiji</MenuItem>
<MenuItem value={'Falkland Islands'}>Falkland Islands</MenuItem>
<MenuItem value={'France'}>France</MenuItem>
<MenuItem value={'Gabon'}>Gabon</MenuItem>
<MenuItem value={'United Kingdom'}>United Kingdom</MenuItem>
<MenuItem value={'Georgia'}>Georgia</MenuItem>
<MenuItem value={'French Guiana'}>French Guiana</MenuItem>
<MenuItem value={'Ghana'}>Ghana</MenuItem>
<MenuItem value={'Greenland'}>Greenland</MenuItem>
<MenuItem value={'Gambia'}>Gambia</MenuItem>
<MenuItem value={'Guinea'}>Guinea</MenuItem>
<MenuItem value={'Equatorial Guinea'}>Equatorial Guinea</MenuItem>
<MenuItem value={'Greece'}>Greece</MenuItem>
<MenuItem value={'Guatemala'}>Guatemala</MenuItem>
<MenuItem value={'Guinea-Bissau'}>Guinea-Bissau</MenuItem>
<MenuItem value={'Guyana'}>Guyana</MenuItem>
<MenuItem value={'Hong Kong'}>Hong Kong</MenuItem>
<MenuItem value={'Honduras'}>Honduras</MenuItem>
<MenuItem value={'Croatia'}>Croatia</MenuItem>
<MenuItem value={'Haiti'}>Haiti</MenuItem>
<MenuItem value={'Hungary'}>Hungary</MenuItem>
<MenuItem value={'Indonesia'}>Indonesia</MenuItem>
<MenuItem value={'Ireland'}>Ireland</MenuItem>
<MenuItem value={'Israel'}>Israel</MenuItem>
<MenuItem value={'India'}>India</MenuItem>
<MenuItem value={'Iraq'}>Iraq</MenuItem>
<MenuItem value={'Iran'}>Iran</MenuItem>
<MenuItem value={'Iceland'}>Iceland</MenuItem>
<MenuItem value={'Italy'}>Italy</MenuItem>
<MenuItem value={'Jamaica'}>Jamaica</MenuItem>
<MenuItem value={'Jordan'}>Jordan</MenuItem>
<MenuItem value={'Japan'}>Japan</MenuItem>
<MenuItem value={'Kenya'}>Kenya</MenuItem>
<MenuItem value={'Kyrgyzstan'}>Kyrgyzstan</MenuItem>
<MenuItem value={'Cambodia'}>Cambodia</MenuItem>
<MenuItem value={'Korea'}>Korea</MenuItem>
<MenuItem value={'North Korea'}>North Korea</MenuItem>
<MenuItem value={'South Korea'}>South Korea</MenuItem>
<MenuItem value={'Kuwait'}>Kuwait</MenuItem>
<MenuItem value={'Kazakhstan'}>Kazakhstan</MenuItem>
<MenuItem value={'Lao'}>Lao</MenuItem>
<MenuItem value={'Lebanon'}>Lebanon</MenuItem>
<MenuItem value={'Sri Lanka'}>Sri Lanka</MenuItem>
<MenuItem value={'Liberia'}>Liberia</MenuItem>
<MenuItem value={'Lesotho'}>Lesotho</MenuItem>
<MenuItem value={'Lithuania'}>Lithuania</MenuItem>
<MenuItem value={'Luxembourg'}>Luxembourg</MenuItem>
<MenuItem value={'Latvia'}>Latvia</MenuItem>
<MenuItem value={'Libya'}>Libya</MenuItem>
<MenuItem value={'Morocco'}>Morocco</MenuItem>
<MenuItem value={'Moldova'}>Moldova</MenuItem>
<MenuItem value={'Montenegro'}>Montenegro</MenuItem>
<MenuItem value={'Madagascar'}>Madagascar</MenuItem>
<MenuItem value={'Macedonia'}>Macedonia</MenuItem>
<MenuItem value={'Mali'}>Mali</MenuItem>
<MenuItem value={'Myanmar'}>Myanmar</MenuItem>
<MenuItem value={'Mongolia'}>Mongolia</MenuItem>
<MenuItem value={'Mauritania'}>Mauritania</MenuItem>
<MenuItem value={'Malawi'}>Malawi</MenuItem>
<MenuItem value={'Mexico'}>Mexico</MenuItem>
<MenuItem value={'Malaysia'}>Malaysia</MenuItem>
<MenuItem value={'Mozambique'}>Mozambique</MenuItem>
<MenuItem value={'Namibia'}>Namibia</MenuItem>
<MenuItem value={'New Caledonia'}>New Caledonia</MenuItem>
<MenuItem value={'Niger'}>Niger</MenuItem>
<MenuItem value={'Nigeria'}>Nigeria</MenuItem>
<MenuItem value={'Nicaragua'}>Nicaragua</MenuItem>
<MenuItem value={'Netherlands'}>Netherlands</MenuItem>
<MenuItem value={'Norway'}>Norway</MenuItem>
<MenuItem value={'Nepal'}>Nepal</MenuItem>
<MenuItem value={'New Zealand'}>New Zealand</MenuItem>
<MenuItem value={'Oman'}>Oman</MenuItem>
<MenuItem value={'Panama'}>Panama</MenuItem>
<MenuItem value={'Peru'}>Peru</MenuItem>
<MenuItem value={'Papua New Guinea'}>Papua New Guinea</MenuItem>
<MenuItem value={'Philippines'}>Philippines</MenuItem>
<MenuItem value={'Pakistan'}>Pakistan</MenuItem>
<MenuItem value={'Poland'}>Poland</MenuItem>
<MenuItem value={'Puerto Rico'}>Puerto Rico</MenuItem>
<MenuItem value={'Palestine'}>Palestine</MenuItem>
<MenuItem value={'Portugal'}>Portugal</MenuItem>
<MenuItem value={'Paraguay'}>Paraguay</MenuItem>
<MenuItem value={'Qatar'}>Qatar</MenuItem>
<MenuItem value={'Romania'}>Romania</MenuItem>
<MenuItem value={'Serbia'}>Serbia</MenuItem>
<MenuItem value={'Russia'}>Russia</MenuItem>
<MenuItem value={'Rwanda'}>Rwanda</MenuItem>
<MenuItem value={'Saudi Arabia'}>Saudi Arabia</MenuItem>
<MenuItem value={'Solomon Islands'}>Solomon Islands</MenuItem>
<MenuItem value={'Sudan'}>Sudan</MenuItem>
<MenuItem value={'Sweden'}>Sweden</MenuItem>
<MenuItem value={'Singapore'}>Singapore</MenuItem>
<MenuItem value={'Slovenia'}>Slovenia</MenuItem>
<MenuItem value={'Svalbard and Jan Mayen'}>Svalbard and Jan Mayen</MenuItem>
<MenuItem value={'Slovakia'}>Slovakia</MenuItem>
<MenuItem value={'Sierra Leone'}>Sierra Leone</MenuItem>
<MenuItem value={'Senegal'}>Senegal</MenuItem>
<MenuItem value={'Somalia'}>Somalia</MenuItem>
<MenuItem value={'Suriname'}>Suriname</MenuItem>
<MenuItem value={'South Sudan'}>South Sudan</MenuItem>
<MenuItem value={'El Salvador'}>El Salvador</MenuItem>
<MenuItem value={'Syrian Arab Republic'}>Syrian Arab Republic</MenuItem>
<MenuItem value={'Swaziland'}>Swaziland</MenuItem>
<MenuItem value={'Chad'}>Chad</MenuItem>
<MenuItem value={'French Southern Territories'}>French Southern Territories</MenuItem>
<MenuItem value={'Togo'}>Togo</MenuItem>
<MenuItem value={'Thailand'}>Thailand</MenuItem>
<MenuItem value={'Tajikistan'}>Tajikistan</MenuItem>
<MenuItem value={'Timor-Leste'}>Timor-Leste</MenuItem>
<MenuItem value={'Turkmenistan'}>Turkmenistan</MenuItem>
<MenuItem value={'Tunisia'}>Tunisia</MenuItem>
<MenuItem value={'Turkey'}>Turkey</MenuItem>
<MenuItem value={'Trinidad and Tobago'}>Trinidad and Tobago</MenuItem>
<MenuItem value={'Taiwan'}>Taiwan</MenuItem>
<MenuItem value={'Tanzania'}>Tanzania</MenuItem>
<MenuItem value={'Ukraine'}>Ukraine</MenuItem>
<MenuItem value={'Uganda'}>Uganda</MenuItem>
<MenuItem value={'USA'}>USA</MenuItem>
<MenuItem value={'Uruguay'}>Uruguay</MenuItem>
<MenuItem value={'Uzbekistan'}>Uzbekistan</MenuItem>
<MenuItem value={'Venezuela'}>Venezuela</MenuItem>
<MenuItem value={'Vietnam'}>Vietnam</MenuItem>
<MenuItem value={'Vanuatu'}>Vanuatu</MenuItem>
<MenuItem value={'Kosovo'}>Kosovo</MenuItem>
<MenuItem value={'Republic of Kosovo'}>Republic of Kosovo</MenuItem>
<MenuItem value={'Yemen'}>Yemen</MenuItem>
<MenuItem value={'South Africa'}>South Africa</MenuItem>
<MenuItem value={'Zambia'}>Zambia</MenuItem>
<MenuItem value={'Zimbabwe'}>Zimbabwe</MenuItem>
        </Select>
      </FormControl>


            </div>
            
            

        <div className={classes.container}>
    <Card className={classes.card1} variant="outlined" style={{borderBottom: "2px solid blue"}}>
      <CardContent className={classes.content}  >

        
        <Typography variant="h5" component="h2" color="primary" style={{color:'blue'}}>
         Active Cases
        </Typography>
        <br/>
        <Typography variant="h5" component="h2">
            <NumberFormat value= {activeCases} displayType={'text'} thousandSeparator={true} />
        </Typography>
        
      </CardContent>
      
    </Card>

    <Card className={classes.card2} variant="outlined" style={{borderBottom: "2px solid red"}}>
      <CardContent className={classes.content}  >
        
        <Typography variant="h5" component="h2" color="primary" style={{color:'red'}}>
            Deaths
        </Typography>
        <br/>
        <Typography variant="h5" component="h2">
            <NumberFormat value={deaths} displayType={'text'} thousandSeparator={true} / >
    
        </Typography>
        
        
      </CardContent>
      
    </Card>


    <Card className={classes.card3} variant="outlined" style={{borderBottom: "2px solid green"}}>
      <CardContent className={classes.content}  >
        
        <Typography variant="h5" component="h2" color="primary" style={{color:'green'}}>
         Recovered
        </Typography>
        <br/>
        <Typography variant="h5" component="h2">
            <NumberFormat value={recovered} displayType={'text'} thousandSeparator={true}  />
    
        </Typography>
        
        
      </CardContent>
      
    </Card>

    </div>


        

        </div> )
}