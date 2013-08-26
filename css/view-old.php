<!-- Add jQuery library -->
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
 <!-- Add d3js -->
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
 <!-- Add simplevertlinejs -->
 <script type="text/javascript" src="<?= Yii::app()->request->baseUrl.'/images/grafs/simplevertline.js'?>"></script>



<?php
/* @var $this DemoController */
/* @var $model Demo */

$this->breadcrumbs=array(
	'Demos'=>array('index'),
	$model->name,
);

$this->menu=array(
	array('label'=>'List Demo', 'url'=>array('index')),
	array('label'=>'Create Demo', 'url'=>array('create')),
	array('label'=>'Update Demo', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete Demo', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Demo', 'url'=>array('admin')),
);
?>

<?php $this->widget('zii.widgets.CDetailView', array(
        //$id=Crime::model()->id,
	'data'=>$model,
	'cssFile' => Yii::app()->baseUrl . '/css/detailview.css',
	'attributes'=>array(
			'name'=>'nameage',

            
            array(
            'name' => 'pic',
            'cssClass'=>'photo',
            'type' => 'raw',
            
            'value' => CHtml::image(Yii::app()->baseUrl.'/images/'.$model->pic)),
			'distance',
			'county',
            'status',
        	'PrisonRelease',			
        	'robo'),
                //'RelMinusOff',
                //'ID',
		//'DCNumber',
		//'FName',
		//'LName',
		//'MiddleName',
		//'pic',
		//'name',
		//'birthday',
		//'age719',
		//'id',
		//'DCNumber',
		//'FName',
		//'LName',
		//'name',		
		//'Field7',
		//'DOB',
		//'Race',
		//'Sex',
		//'Hair',
		//'Eyes',
		//'Height',
		//'Weight',	              
		//'PrisonReleaseDate',             
		//'ReleaseDateFlag',
		//'FACILITY_description',
		//'status',
	)
); ?>


 <div id="timeline">
     <style type="text/css">
      /* rule for styling the text labels in the timeline */
      svg text {
	  font-size: 12px;
      }
      svg text .date {
	  font-style: italic;
      }
      svg rect { 
	  stroke: rgb(153, 153, 153);  /* shows a slight separation between the bars */
      }

      /* Given the added cssclass in the dataset, you can use rules
         like these to change the bar color accordingly  */
      svg rect.jailed {  
	  fill: rgb(184,0,0);
      }
      svg rect.arrested {
	  fill: rgb(255,255,191);
      }
      svg rect.released, svg rect.crime {
	  fill: rgb(151,151,151);
      }
    </style>
  </div>
  
  <script type="text/javascript">
  //var dataset=[
  //    
 // ];  
    
    var svline = svline()
    .width(800)
    .height(800);   // adjust the height of the timeline
 
    d3.json('<?= Yii::app()->request->baseUrl.'/images/grafs/'.$model->id.'.json'?>', function(dataset){
	// adding a parsed version of the date to the dataset
	dataset.forEach(function(datum) {
	    datum.parsed_date = Date.parse(datum.date);
	});
	d3.select("#timeline")
	    .datum(dataset)
	    .call(svline);
    });
       </script>
</div>
