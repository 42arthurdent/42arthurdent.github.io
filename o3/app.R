library(shiny) #online format
library(readxl) #reading in excel file
library(readr)
library(rgdal) #projection update
library(stringr)#formating (str_pad)
library(tidyr) # 
library(tigris) #loadcensus bounderies
library(DT)
library(maps)
library(dplyr)
library(lattice)

### add upload file
### add name of current file--? text box for manual input/notes
### add print page option

us.map= readOGR( "./data/state", "cb_2016_us_state_500k")#tigris not working, saving shapefile in data
#us.map <- tigris::states(cb = TRUE, year = 2016)#if tigris works in the future
us.map <- us.map[!us.map$STATEFP %in% c("02", "15", "72", "66", "78", "60", "69","64", "68", "70", "74"),]
us.map <- us.map[!us.map$STATEFP %in% c("81", "84", "86", "87", "89", "71", "76", "95", "79"),]
us.map = spTransform(us.map, CRS("+init=epsg:5070"))
#__________________________
###add downloadable options
#grabing table from local source - will test other options later
tf = "./data/2015_o3_naaqs_preliminary_transport_assessment_design_values_contributions.xlsx"
noda = read_excel(tf, sheet = 2) #library(readxl)
#rm(tf)#

#monitor data (save locally- takes too long to retrieve)

#_______________upload monitor_all file
monitr = read_csv('./data/annual_all_2011.csv' )

#setnames(monitr, old = c('State Code','County Code', 'Site Num', 'Parameter Name'), new = c('State.Code', 'County.Code', 'Site.Num', 'Parameter.Name'))
colnames(monitr)[1] = "State.Code"
colnames(monitr)[2] = "County.Code"
colnames(monitr)[3] = "Site.Num"
colnames(monitr)[9] = "Parameter.Name"
colnames(monitr)[49] = "Local.Site.Name"

monitr2= unique( filter(transmute(monitr, Monitor.ID = paste(monitr$State.Code,monitr$County.Code,monitr$Site.Num, sep = ""), Longitude, Latitude,  Local.Site.Name, Address, Parameter.Name), Parameter.Name == "Ozone") )



#_________________________data processing of NODA file
noda = noda[-c(756,757),] #drop rows with NA values
colnames(noda)[1]= "Monitor.ID" #rename column
noda$Monitor.ID = str_pad(noda$Monitor.ID, 9, "left", pad = "0") # pad monitor numbers to 9 digitis with leading zero library(stringr)

colnames(noda)[4] = "BASE_AVG_DV" #change long column names
colnames(noda)[5] = "BASE_MAX_DV" 
colnames(noda)[6] = "FY_AVG_DV" 
colnames(noda)[7] = "FY_MAX_DV" 
colnames(noda)[58] = "CAN_MEX" 
colnames(noda)[61] = "INITIAL_BOUND" 

noda2 = gather(noda[,c(1, 4:62)], ST, CONT_AMT, -Monitor.ID, - BASE_AVG_DV, -BASE_MAX_DV, -FY_AVG_DV, -FY_MAX_DV) #gather/transpose the data
noda2 = arrange(noda2,Monitor.ID )
noda2 = mutate(noda2, Percent_FY_AVG_DV = round((CONT_AMT / FY_AVG_DV) *100 ))



ui <-
  fluidPage(
    titlePanel("O3 DV project"),
    title = "O3 test",
    fluidRow(
      column(width = 5, offset = 1, plotOutput('plot1')),
      column(width = 4, offset = -1, plotOutput('plot2'))
    ),
    fluidRow(
      column(width = 4,offset = 1, selectInput(inputId ="SEL_STATE", label = "State",  choices = unique(c(noda$State)), selected = "New Jersey" )),
      
      column(width = 4,  htmlOutput("monitor_ID_sel") ),fluidRow(
        column(width = 8,offset = 1, DT::dataTableOutput("table1"))  
      ))
  )#fluidPage



server <- function(input, output) {
  output$monitor_ID_sel <-renderUI({
    avail_monitors = noda[noda$State == input$SEL_STATE, 'Monitor.ID']
    selectInput(inputId = "SEL_monitor", label = "Monitor ID",  choices = unique(avail_monitors), selected = unique(avail_monitors)[1] )
  })
  mont_test = reactive({
    a = subset(noda2, Monitor.ID == input$SEL_monitor)
    return(a)
  })      #reactive
  output$table1 <- DT::renderDataTable( mont_test(), options = list(pageLength = 10))###update table format
  #need to fix color assignment, add legend
  output$plot1 <- renderPlot({
    us.map = geo_join(us.map,  mont_test(), 'STUSPS', 'ST')
    trellis.par.set(axis.line=list(col=NA))
    spplot(us.map, zcol = "Percent_FY_AVG_DV" ,col.regions=colorRampPalette(c("white","grey10"))(50),
           main=list(label="Contribution % to Average Future Year Design Value",cex=1),
           pretty=T,par.settings=list(axis.text=list(cex=1)))
  })
  
  
  output$plot2 <- renderPlot({
    map('state', region = input$SEL_STATE)
    lon = monitr2[monitr2$Monitor.ID ==input$SEL_monitor, 'Longitude']
    lat = monitr2[monitr2$Monitor.ID ==input$SEL_monitor, 'Latitude']
    site_name = monitr2[monitr2$Monitor.ID ==input$SEL_monitor, 'Local.Site.Name']
    points(lon, lat, pch = 13, col = 'red', cex = 5, lwd = 4)
    title(site_name)
  })
}


shinyApp(ui = ui, server = server)
