
<script type="text/javascript">
   $(document).ready(function(){
        $("#question_type").change(function(){
        if ($(this).val() == "short answer"){
        $("#question").show();
        $("#option").hide();
        $("#answer").hide();
      
    }
        else if ($(this).val() == "multiple choice"){
        $("#question").show();
        $("#option").show();
        $("#answer").show();
        
    }