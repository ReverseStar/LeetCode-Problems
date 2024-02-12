class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function majorityElement($nums) {
        $frequency= array_count_values($nums);

asort($frequency);
print_r($frequency);

$last_key= array_key_last($frequency);
$last_val=end($frequency);

$pro_majority=array($last_key=>$last_val);


$condition =count($nums)/2;

if($pro_majority[$last_key]>$condition){
return $last_key;

}
    }
}