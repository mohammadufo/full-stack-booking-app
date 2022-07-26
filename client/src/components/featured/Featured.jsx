import useFetch from '../../hooks/useFetch';
import Spinner from '../spinner/Spinner';
import './featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=mashad,tehran,karbala'
  );

  return (
    <>
      <div className="featured">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="featuredItem">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/86/55/a9/great-court.jpg?w=700&h=500&s=1"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Mashhad</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/19/8c/47/0e/tehran-the-capital-of.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Tehran</h1>
                <h2>{data[1]} properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://en.shafaqna.com/wp-content/uploads/2020/08/60085_968.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Karbala</h1>
                <h2>{data[2]} properties</h2>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="featured2">
        <div className="featuredItem">
          <img
            src="https://bstatic.com/xdata/images/xphoto/1182x887/150934001.jpg?k=d4eee85e77253b8ce5d6cd7516cde326e603c0a6858e34e861acbde12ba3a0bd&o=?size=S"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/104028063.webp?k=c22f340e36295722da6b9f0d75ce4a649e39eb220d17aec38df30f5a36ae2684&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
