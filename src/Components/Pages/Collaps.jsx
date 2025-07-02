export default function Collaps() {
  return (
    <>
        <div class="container mx-auto p-24 bg-gray-100 space-y-5 mt-24 rounded-2xl">
    <div class="collapse collapse-arrow border border-blue-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
       Is there category based filtering?
      </div>
      <div class="collapse-content">
        <p>
         Yes ...
          </p>
      </div>
    </div>
    <div class="collapse collapse-arrow border  border-blue-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        Can I delete my post?
      </div>
      <div class="collapse-content">
        <p>
         Yes! From the "My Post" page.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow border  border-blue-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        Is my  info safe? </div>
      <div class="collapse-content">
        <p>
        yes! your  Info is always save.
             </p>
      </div>
    </div>
    <div class="collapse collapse-arrow border  border-blue-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
      How do I report a bad listing?
      </div>
      <div class="collapse-content">
        <p>
         We implement it future.
        </p>
      </div>
    </div>
  </div>
    </>
  );
}